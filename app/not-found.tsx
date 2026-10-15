import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ width: '100%', padding: '160px 1.5rem 6rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem' }}>Page not found</h1>
      <p style={{ color: '#e0e0e0', marginBottom: '2rem' }}>That page doesn't exist, but your keys are still waiting.</p>
      <Link href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>
        Back to Keystone
      </Link>
    </div>
  );
}
