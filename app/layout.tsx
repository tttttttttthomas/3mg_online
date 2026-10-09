import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '3MG — Jewelry & Accessories',
    template: '%s — 3MG',
  },
  description: 'Distinctive jewelry and accessories by 3MG Shanghai.',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
