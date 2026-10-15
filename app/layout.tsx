import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MuteToggle from '../components/MuteToggle'; // disabled for now, per product decision -- keep import commented alongside usage below
import { AudioProvider } from '../context/AudioContext';
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from 'next';
import {
  APP_STORE_ID,
  FOUNDER_NAME,
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE,
  ORGANIZATION_NAME,
  SITE_NAME,
  SITE_URL,
} from '../lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: FOUNDER_NAME }],
  creator: ORGANIZATION_NAME,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '500x500' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: '/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thekeystoneapp',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  // Safari's Smart App Banner: prompts iOS visitors to open or install the app.
  other: { 'apple-itunes-app': `app-id=${APP_STORE_ID}` },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background text-white font-sans min-h-screen flex flex-col`}>
        {/* Scroll-reveal content starts at opacity 0 and needs JS to appear; show it when JS is off. */}
        <noscript>
          <style>{'.animate-on-scroll{opacity:1!important;transform:none!important}'}</style>
        </noscript>
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