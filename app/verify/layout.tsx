import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// /verify is a transient auth-redirect hop into the mobile app; it should never be indexed.
export const metadata: Metadata = {
  title: 'Verifying your account',
  robots: { index: false, follow: false },
};

export default function VerifyLayout({ children }: { children: ReactNode }) {
  return children;
}
