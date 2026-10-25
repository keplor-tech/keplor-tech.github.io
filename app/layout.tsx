import './globals.css';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/keplor/SiteShell';

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
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}