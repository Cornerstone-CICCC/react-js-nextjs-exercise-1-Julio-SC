'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex gap-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/services" className="hover:underline">Services</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
