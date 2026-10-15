import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'crypto';
import {
  clientIp,
  createRateLimiter,
  GLOBAL_LIMIT,
  GLOBAL_WINDOW_MS,
  IP_LIMIT,
  IP_WINDOW_MS,
  isCodeRedeemed,
  isCodeUsable,
  isSameOrigin,
  isWithinCooldown,
  MAX_BODY_BYTES,
  normalizeEmail,
} from '@/lib/waitlistGuard';

const MAX_EMAIL_LENGTH = 254; // the SMTP limit

const schema = z.object({
  email: z.string().max(MAX_EMAIL_LENGTH).email(),
});

// Per warm serverless instance, so this blunts casual abuse but is not a hard limit; see waitlistGuard.ts
const ipLimiter = createRateLimiter(IP_LIMIT, IP_WINDOW_MS);
const globalLimiter = createRateLimiter(GLOBAL_LIMIT, GLOBAL_WINDOW_MS);

// Required env vars: RESEND_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// Built lazily (not at import time) so `next build` / `next dev` don't crash when
// env vars are absent -- a missing key only fails the request that needs it.
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');
  return new Resend(apiKey);
}

// Server-only client: referral_codes has RLS enabled with no anon/authenticated
// insert policy (codes are meant to be backend-inserted -- see keystone-app's
// referralService.ts), so this route must use the service-role key, never the
// anon key. This client is never exposed to the browser.
function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY is not set');
  }
  return createClient(url, serviceRoleKey);
}

const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I/L -- avoids ambiguous chars
const CODE_LENGTH = 6;
const MAX_GENERATE_ATTEMPTS = 3;
const CODE_REDEMPTION_WINDOW_DAYS = 90; // how long the user has to redeem the code -- separate from the 1-month benefit it grants once redeemed

function generateReferralCode(): string {
  const bytes = randomBytes(CODE_LENGTH);
  let suffix = '';
  for (let i = 0; i < CODE_LENGTH; i++) {
    suffix += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return `KEYSTONE-${suffix}`; // validateReferralCode() uppercases + exact-matches, so this must already be uppercase
}

type SignupDecision = { action: 'send'; code: string } | { action: 'skip' };

// What to do for an address that asks for the free month. Skipping still answers "Success" to the caller,
// so the endpoint can't be used to learn which addresses have signed up or redeemed.
async function resolveSignup(email: string): Promise<SignupDecision> {
  const { data: existingSignup } = await getSupabaseAdmin()
    .from('landing_free_month_signups')
    .select('referral_code, created_at')
    .eq('email', email)
    .maybeSingle();

  if (!existingSignup) return { action: 'send', code: await mintNewCode(email) };

  const { data: existingCode } = await getSupabaseAdmin()
    .from('referral_codes')
    .select('is_active, usage_limit, used_count, expires_at')
    .eq('code', existingSignup.referral_code)
    .maybeSingle();

  // Already redeemed: this address has had its month. Another code would make the offer unlimited.
  if (existingCode && isCodeRedeemed(existingCode)) return { action: 'skip' };

  // created_at is the time the code was last emailed. Without this, anyone could re-submit an address
  // over and over to mail that person from the founder's address.
  if (isWithinCooldown(existingSignup.created_at, Date.now())) return { action: 'skip' };

  if (existingCode && isCodeUsable(existingCode, Date.now())) {
    await getSupabaseAdmin()
      .from('landing_free_month_signups')
      .update({ created_at: new Date().toISOString() })
      .eq('email', email);
    return { action: 'send', code: existingSignup.referral_code };
  }

  // Expired without ever being redeemed
  return { action: 'send', code: await mintNewCode(email) };
}

async function mintNewCode(email: string): Promise<string> {
  const expiresAt = new Date(Date.now() + CODE_REDEMPTION_WINDOW_DAYS * 24 * 60 * 60 * 1000).toISOString();

  for (let attempt = 0; attempt < MAX_GENERATE_ATTEMPTS; attempt++) {
    const code = generateReferralCode();
    const { error } = await getSupabaseAdmin().from('referral_codes').insert({
      code,
      subscription_type: 'monthly',
      description: `Landing page signup: ${email}`,
      duration_months: 1,
      is_active: true,
      usage_limit: 1,
      used_count: 0,
      expires_at: expiresAt,
    });

    if (!error) {
      await getSupabaseAdmin()
        .from('landing_free_month_signups')
        .upsert({ email, referral_code: code, created_at: new Date().toISOString() });
      return code;
    }

    if (error.code !== '23505') {
      throw error; // not a PK collision -- don't retry, surface it
    }
    // 23505 = unique violation on `code` -- regenerate and retry
  }

  throw new Error('Failed to generate a unique referral code after multiple attempts.');
}

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req.headers.get('origin'), req.headers.get('host'))) {
    return NextResponse.json({ message: 'Forbidden.' }, { status: 403 });
  }

  const wait = ipLimiter(clientIp(req.headers)) || globalLimiter('all');
  if (wait) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(wait) } }
    );
  }

  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 413 });
    }

    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    const email = normalizeEmail(result.data.email);

    const decision = await resolveSignup(email);
    if (decision.action === 'skip') {
      return NextResponse.json({ message: 'Success' });
    }
    const { code } = decision;

    // Add to Resend audience
    await getResend().contacts.create({
      email,
      audience_id: '10d3a00b-093e-4b2d-8f1f-422a8774522b',
      unsubscribed: false
    });

    // Send the free-month code via Resend
    await getResend().emails.send({
      to: email,
      from: '"Keystone" <zach@thekeystoneapp.com>',
      subject: 'Your 1 Month of Keystone Pro',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hey!</p>
          <p style="font-size: 16px; margin-bottom: 20px;">It's Zach here, the creator of Keystone. Here's your code for 1 month of Keystone Pro, free:</p>
          <p style="font-size: 28px; font-weight: bold; letter-spacing: 2px; text-align: center; margin: 24px 0; padding: 16px; background: #f5f5f5; border-radius: 12px;">${code}</p>
          <p style="font-size: 16px; margin-bottom: 20px;">Open the Keystone app, then go to <strong>Settings &rarr; Enter Referral Code</strong> (or enter it during onboarding) to redeem it.</p>
          <p style="font-size: 16px; margin-bottom: 20px;">You can also join our <a href="https://discord.me/thealignedcore" style="color: #007bff; text-decoration: none;">Discord</a> community!</p>
          <p style="font-size: 16px; margin-top: 30px;">Best,<br/>Zach</p>
        </div>
      `
    });

    return NextResponse.json({ message: 'Success' });
  } catch (e) {
    // Provider errors can quote the address, so only the error type is logged
    console.error('Waitlist signup failed:', e instanceof Error ? e.name : 'unknown error');
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}