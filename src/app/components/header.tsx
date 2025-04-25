'use client';

import { useState } from 'react';
import { FiCalendar, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-teal h-16 border-b border-b-white flex justify-between items-center text-white px-4">
      {/* WSAF 2025 text */}
      <div className="w-48 text-left">
        <Link href="/" className="text-xl font-semibold">
          WSAF <span className="text-yellow">2025</span>
        </Link>
      </div>

      {/* Desktop nav buttons */}
      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-8 font-semibold uppercase">
            <li>
              <Link href="/perform">Perform or Exhibit</Link>
            </li>
            <li>
              <Link href="/crew">Join the Crew</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop SUBMIT button */}
      <div className="hidden md:block w-48 text-right">
        <a
          href="https://submit.wsaf.org.uk/2025/cfp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center uppercase font-semibold text-black bg-yellow px-4 py-2 drop-shadow-sm hover:scale-105 transition-transform"
        >
          <FiCalendar className="mr-1" />
          Submit Event
        </a>
      </div>

      {/* Mobile hamburger menu button */}
      <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile conditional dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-teal border-b border-b-white p-4 z-50">
          <nav className="mb-4">
            <ul className="flex flex-col gap-4 font-semibold uppercase">
              <li>
                <Link href="/perform" onClick={() => setMobileMenuOpen(false)}>
                  Perform or Exhibit
                </Link>
              </li>
              <li>
                <Link href="/crew" onClick={() => setMobileMenuOpen(false)}>
                  Join the Crew
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <a
              href="https://submit.wsaf.org.uk/2025/cfp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center uppercase font-semibold text-black bg-yellow px-4 py-2 drop-shadow-sm hover:scale-105 transition-transform"
            >
              <FiCalendar className="mr-1" />
              Submit Event
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
