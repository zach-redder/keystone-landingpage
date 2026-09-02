'use client';

import { useEffect, useState } from 'react';

const getDeepLinkPathForType = (type: string | null, hasCode: boolean) => {
  switch (type) {
    case 'signup':
      return 'emailconfirmation';
    case 'email_change':
      return 'signin';
    case 'recovery':
      return 'resetpassword';
    default:
      // Supabase's PKCE-flow links -- the app's actual flowType -- redirect with only
      // `code` and no `type` at all; `type` is only present on older token_hash/OTP-style
      // links. Fall back to the most common bare-code case so the redirect still fires --
      // the app's own _layout.js establishes the real session and checks it regardless of
      // which auth screen this lands on.
      return hasCode ? 'emailconfirmation' : null;
  }
};

// Only hard-block on UAs that are unambiguously desktop. A Mac UA is ambiguous (iPadOS
// 13+ Safari reports as Macintosh by default), so fail open there and still attempt the
// redirect rather than dead-ending real iPad users on a "use mobile" message.
const isDesktop = () => /Windows NT|X11/i.test(navigator.userAgent);

export default function VerifyPage() {
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    // Supabase can deliver the auth payload either as query params (token_hash/code,
    // the current default) or as a hash fragment (access_token, legacy implicit flow) --
    // check both since we don't consume either here, just detect which one is present.
    const query = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash.substring(1));
    const type = query.get('type') || hash.get('type');
    const hasCode = query.has('code') || hash.has('code');
    const path = getDeepLinkPathForType(type, hasCode);

    if (!path) {
      setStatus('This verification link is invalid or has expired.');
      return;
    }

    if (isDesktop()) {
      setStatus('Please open this link on your mobile device to continue in the Keystone app.');
      return;
    }

    // Deliberately do NOT call exchangeCodeForSession/verifyOtp here. A PKCE code can only
    // be redeemed by the client that requested it (the mobile app, via AsyncStorage-stored
    // verifier) -- exchanging it in this browser would burn the single-use code before the
    // app ever sees it. Instead, forward everything Supabase gave us, unmodified, so the
    // app's own Supabase client can complete the exchange itself.
    const deepLink = `keystone://${path}${window.location.search}${window.location.hash}`;

    setStatus('Verified! Opening the Keystone app...');
    window.location.href = deepLink;

    // Fallback in case the app isn't installed
    const fallback = setTimeout(() => {
      window.location.href = 'https://thekeystoneapp.com';
    }, 2500);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h2>{status}</h2>
    </div>
  );
}
