import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  email: z.string().email(),
});

// Required env vars: RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    const { email } = result.data;

    // Add to Resend audience
    await resend.contacts.create({
      email,
      audience_id: '10d3a00b-093e-4b2d-8f1f-422a8774522b',
      unsubscribed: false
    });

    // Send confirmation email with Resend
    await resend.emails.send({
      to: email,
      from: '"Keystone" <zach@thekeystoneapp.com>',
      subject: 'Welcome to the Keystone Waitlist',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hey!</p>
          <p style="font-size: 16px; margin-bottom: 20px;">It's Zach here, the creator of Keystone. Thanks for joining the waitlist!</p>
          <p style="font-size: 16px; margin-bottom: 20px;">I'm excited to share our journey with you. We'll keep you updated on our launch and share some cool behind-the-scenes content along the way.</p>
          <p style="font-size: 16px; margin-bottom: 20px;">You can also join our <a href="https://discord.me/thealignedcore" style="color: #007bff; text-decoration: none;">Discord</a> community to connect with other waitlist members and recieve rewards!</p>
          <p style="font-size: 16px; margin-bottom: 20px;">If you join, I'd love to hear what brought you to Keystone!</p>
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