import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MuteToggle from '../components/MuteToggle'; // disabled for now, per product decision -- keep import commented alongside usage below
import { AudioProvider } from '../context/AudioContext';
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Keystone - Overcome Doubt",
  description: "Affirm who you are. Question who you're becoming. Download Keystone today.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Keystone - Overcome Doubt",
description: "Affirm who you are. Question who you're becoming. Download Keystone today.",
    url: "https://thekeystoneapp.com",
    images: ["https://thekeystoneapp.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone - Overcome Doubt",
description: "Affirm who you are. Question who you're becoming. Download Keystone today.",
    images: ["https://thekeystoneapp.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background text-white font-sans min-h-screen flex flex-col`}>
        <AudioProvider>
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center w-full">
            {children}
          </main>
          <Footer />
          {/* <MuteToggle /> */}
          <Analytics />
        </AudioProvider>
      </body>
    </html>
  );
} 