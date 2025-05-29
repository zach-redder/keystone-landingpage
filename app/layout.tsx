import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/next"

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