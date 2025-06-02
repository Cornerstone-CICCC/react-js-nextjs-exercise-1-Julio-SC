import './globals.css'; 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/NavBar'; 
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Intro',
  description: 'My first NextJS app with App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
