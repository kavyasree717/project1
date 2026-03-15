// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';  // ← adjust path if needed

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atomity Savings Challenge',
  description: 'Frontend challenge submission',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>  {/* ← wrap children here */}
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
