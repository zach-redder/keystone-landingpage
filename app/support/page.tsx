import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL, OG_IMAGE } from '../../lib/seo';

// The page is noindex until the owner approves it; remove `robots` below once it is approved,
// and add /support to app/sitemap.ts.
const DESCRIPTION = 'Get help with Keystone: contact us, manage your subscription, delete your account, and more.';

export const metadata: Metadata = {
  title: 'Support',
  description: DESCRIPTION,
  alternates: { canonical: '/support' },
  robots: { index: false, follow: true },
  openGraph: { title: 'Keystone Support', description: DESCRIPTION, url: '/support', images: [OG_IMAGE] },
};

export default function Support() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)',
        paddingTop: '100px',
      }}
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4de95]">Support</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Contact us</h2>
            <p className="text-gray-300 leading-relaxed">
              Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#d4de95] underline">
                {CONTACT_EMAIL}
              </a>{' '}
              and we will get back to you within two business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Common questions</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">How do I delete my account?</h3>
                <p>
                  In the app, open Profile and tap Delete Account. This permanently removes your account and everything
                  you have saved. It can&apos;t be undone. If you can&apos;t get into the app, email us from the address you
                  signed up with and we will delete it for you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">How do I cancel my subscription?</h3>
                <p>
                  Subscriptions are managed by Apple, not by Keystone. In Keystone, open Profile and tap My Subscription,
                  or on your iPhone open Settings, tap your name, then Subscriptions, and choose Keystone. Deleting your
                  Keystone account does not cancel an Apple subscription.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">How do I restore a purchase?</h3>
                <p>
                  In Keystone, open Profile and tap Restore Purchases. If you subscribed with a different Apple ID, switch
                  to it in iPhone Settings first. If nothing is found, you&apos;ll be offered the plans, where you can use
                  the restore option. Your Pro access is also tied to your Keystone account, so signing in to the same
                  account on a new phone brings it with you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">I forgot my password.</h3>
                <p>
                  On the sign-in screen, type your email address and tap Forgot Password?. Then open the link in the email we
                  send you on the same iPhone where you asked for it. It opens Keystone, where you can choose a new password.
                  If the link says it has expired, request a new one.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">What happens to what I write?</h3>
                <p>
                  Your messages and saved keys are sent to our AI provider so Keystone can reply, and you can delete
                  everything at any time. Read the details in our{' '}
                  <Link href="/privacy-policy" className="text-[#d4de95] underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">If you need urgent help</h2>
            <p className="text-gray-300 leading-relaxed">
              Keystone is a self-reflection tool. It isn&apos;t therapy or medical advice, and it can&apos;t give you the
              support you may need in a crisis. In the US, you can call or text 988 (Suicide &amp; Crisis Lifeline), or
              text HOME to 741741 (Crisis Text Line). Elsewhere,{' '}
              <a href="https://findahelpline.com" className="text-[#d4de95] underline" rel="noopener noreferrer">
                findahelpline.com
              </a>{' '}
              lists services by country. If you might be in immediate danger, call your local emergency number.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
