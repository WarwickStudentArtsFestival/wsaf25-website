'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLinks from './NavLinks';
import Image from 'next/image';
import PaintBrush from '@/assets/icons/paintbrush.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const pathname = usePathname();

  return (
    <header className="top-0 z-50 w-full bg-teal h-16 border-b border-b-white flex items-center text-white px-4 relative">
      {/* WSAF logo (left) */}
      <div className="text-left w-32 flex-shrink-0">
        <Link href="/" className="text-xl font-semibold">
          WSAF <span className="text-yellow">2025</span>
        </Link>
      </div>

      {/* Centered nav links (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <nav className="flex gap-4">
          <NavLinks />
        </nav>
      </div>

      {/* W-Paint (right on desktop) */}
      <div className="hidden md:flex items-center gap-2 ml-auto">
        <Link
          href="/wpaint"
          className={`flex items-center rounded hover:underline uppercase ${
            pathname === '/wpaint' ? 'text-yellow-400' : 'text-white'
          }`}
        >
          <div className="font-bold">W-Paint</div>
          <Image
            src={PaintBrush}
            alt="Paint brush icon"
            width={25}
            height={25}
          />
        </Link>
      </div>

      {/* Hamburger button (mobile only) */}
      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="text-white p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 z-100 left-0 right-0 bg-teal border-b border-b-white p-4">
          <nav
            className="flex flex-col gap-4 items-start w-full"
            role="navigation"
          >
            <div className="flex flex-col gap-4 w-full">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
            </div>

            {/* W-Paint Link */}
            <Link
              href="/wpaint"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center mx-auto gap-2 rounded hover:underline uppercase ${
                pathname === '/wpaint' ? 'text-yellow-400' : 'text-white'
              }`}
            >
              <div className="font-bold">W-Paint</div>
              <Image
                src={PaintBrush}
                alt="Paint brush icon"
                width={25}
                height={25}
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
