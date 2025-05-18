import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const schema = z.object({
  email: z.string().email(),
});

// Required env vars: SUPABASE_URL, SUPABASE_ANON_KEY, RESEND_API_KEY
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    const { email } = result.data;

    // Insert into Supabase
    const { error } = await supabase.from('waitlist').insert([{ email }]);
    if (error) {
      return NextResponse.json({ message: 'Database error.' }, { status: 500 });
    }

    // Send confirmation email with Resend
    await resend.emails.send({
      to: email,
      from: 'waitlist@keystone.app',
      subject: 'Welcome to the Keystone Waitlist',
      html: `<p>Thank you for joining the Keystone waitlist!<br/>We'll keep you updated on our launch.</p>`
    });

    return NextResponse.json({ message: 'Success' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
} 