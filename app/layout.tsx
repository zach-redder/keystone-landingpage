import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Keystone",
  description: "Waitlist Keystone now.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Keystone",
    description: "Waitlist Keystone now.",
    url: "https://thekeystoneapp.com",
    images: ["https://thekeystoneapp.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone",
    description: "Waitlist Keystone now.",
    images: ["https://thekeystoneapp.com/og-image.png"],
  },
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
        <Analytics />
      </body>
    </html>
  );
} 