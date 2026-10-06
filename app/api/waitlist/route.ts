import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'crypto';

const schema = z.object({
  email: z.string().email(),
});

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

async function findReusableCode(email: string): Promise<string | null> {
  const { data: existingSignup } = await getSupabaseAdmin()
    .from('landing_free_month_signups')
    .select('referral_code')
    .eq('email', email)
    .maybeSingle();

  if (!existingSignup) return null;

  const { data: existingCode } = await getSupabaseAdmin()
    .from('referral_codes')
    .select('is_active, usage_limit, used_count, expires_at')
    .eq('code', existingSignup.referral_code)
    .maybeSingle();

  if (!existingCode) return null;

  const stillUsable =
    existingCode.is_active &&
    (existingCode.usage_limit === null || existingCode.used_count < existingCode.usage_limit) &&
    (!existingCode.expires_at || new Date(existingCode.expires_at) > new Date());

  return stillUsable ? existingSignup.referral_code : null;
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
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    const { email } = result.data;

    const code = (await findReusableCode(email)) ?? (await mintNewCode(email));

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
    console.error(e);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}