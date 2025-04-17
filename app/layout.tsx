import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elevate-soft.vercel.app'), 
  title: 'ElevateSoft - Software Solutions for Modern Businesses',
  description: 'Elevate your business with our innovative software solutions.',
  openGraph: { // Optional but recommended for social sharing
    title: 'ElevateSoft - Software Solutions for Modern Businesses',
    url: 'https://elevate-soft.vercel.app',
    description: 'Elevate your business with our innovative software solutions.',
    type: 'website',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200,
      height: 630,
    }]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}