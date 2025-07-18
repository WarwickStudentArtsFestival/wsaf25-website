import type { Metadata, Viewport } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/footer/footer';
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/app/components/header';
import LayoutClient from '@/app/layout-client';
import FeedbackPopup from '@/app/components/feedback-popup';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    default: 'Warwick Student Arts Festival 2025',
    template: '%s | WSAF 2025',
  },
  description:
    'Warwick Student Arts Festival (WSAF) is a fully student-run showcase and celebration of the arts at Warwick, taking place in Week 8-9 of Term 3 (Fri 13th - Mon 16th June).\n\nSubmissions for events are open until Friday 2nd May!',
  category: 'website',
  keywords: [
    'Warwick',
    'Warwick University',
    'University of Warwick',
    'Warwick Student Arts Festival',
    'WSAF',
    'Warwick Arts',
    'Festival',
  ],
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
};

export const viewport: Viewport = {
  themeColor: '#087F8C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutClient>
      <html lang="en">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
        <body className={`${lexend.className} flex flex-col min-h-screen`}>
          <Header />
          {children}
          <Footer />
          <FeedbackPopup />
        </body>
      </html>
    </LayoutClient>
  );
}
