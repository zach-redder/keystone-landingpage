'use client';

import { useEffect, useState } from 'react';

const getDeepLinkPathForType = (type: string | null) => {
  switch (type) {
    case 'signup':
      return 'emailconfirmation';
    case 'email_change':
      return 'signin';
    case 'recovery':
      return 'resetpassword';
    default:
      return null;
  }
};

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export default function VerifyPage() {
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    // Supabase can deliver the auth payload either as query params (token_hash/code,
    // the current default) or as a hash fragment (access_token, legacy implicit flow) --
    // check both since we don't consume either here, just detect which one is present.
    const query = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash.substring(1));
    const type = query.get('type') || hash.get('type');
    const path = getDeepLinkPathForType(type);

    if (!path) {
      setStatus('This verification link is invalid or has expired.');
      return;
    }

    if (!isMobile()) {
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
