import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystone',
  description: 'Bridge the gap between your actions and your values. Join the waitlist for Keystone, the self-alignment app.',
  
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-white font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 