'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../api/supabase';

const getHashParams = () => {
  const hash = typeof window !== 'undefined' ? window.location.hash.substring(1) : '';
  return new URLSearchParams(hash);
};

const getDeepLinkForType = (type: string | null) => {
  switch (type) {
    case 'signup':
      return 'keystone://WaitForEmailConfirmation';
    case 'email_change':
      return 'keystone://signin';
    case 'recovery':
      return 'keystone://resetpassword';
    default:
      return null;
  }
};

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export default function VerifyPage() {
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const process = async () => {
      const hashParams = getHashParams();
      const type = hashParams.get('type');
      const deepLink = getDeepLinkForType(type);

      const { error } = await supabase.auth.exchangeCodeForSession(window.location.hash);

      if (error) {
        setStatus('Verification failed. Please try again.');
        console.error(error);
        return;
      }

      setStatus('Verified! Redirecting...');

      if (deepLink && isMobile()) {
        window.location.href = deepLink;

        // Fallback in case app isn't installed
        setTimeout(() => {
          window.location.href = 'https://thekeystoneapp.com';
        }, 2000);
      }
    };

    process();
  }, []);

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h2>{status}</h2>
    </div>
  );
}
