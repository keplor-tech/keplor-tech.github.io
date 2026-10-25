import './globals.css';
import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { SiteShell } from '@/components/keplor/SiteShell';

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Keplor — Intelligent systems, built around your business',
  description: 'Keplor designs AI/ML, software, cloud, and analytics systems around real business needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}>
      <body className={`${interTight.className} ${instrumentSerif.className} ${spaceMono.className}`}><SiteShell>{children}</SiteShell></body>
    </html>
  );
}