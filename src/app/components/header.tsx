'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="z-50 sticky top-0 w-full bg-teal h-16 border-b border-b-white flex items-center text-white px-4">
      {/* WSAF logo (left) */}
      <div className="text-left w-32 flex-shrink-0">
        <Link href="/" className="text-xl font-semibold">
          WSAF <span className="text-yellow">2025</span>
        </Link>
      </div>

      {/* Centered nav links (desktop only) */}
      <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
        <nav className="flex gap-4">
          <NavLinks />
        </nav>
      </div>

      {/* Right links (desktop) */}
      <div className="hidden sm:flex items-center gap-2 ml-auto">
        {/*<Link
          href="/crew"
          className={`uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] ${pathname === '/crew' ? 'text-yellow-400' : 'bg-yellow text-black'}`}
        >
          <span className="hidden lg:inline">Join the </span>Crew
        </Link>*/}

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638p"
          target="_blank"
          className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
        >
          Feedback
        </Link>

        {/* <Link
          href="https://helfertool.wsaf.org.uk/wsaf2025/"
          target="_blank"
          className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
        >
          Crew <span className="hidden lg:inline">Signup</span>
        </Link>

        <Link
          href="https://submit.wsaf.org.uk/2025/cfp"
          target="_blank"
          className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
        >
          Performers <span className="hidden lg:inline">Portal</span>
        </Link>*/}
      </div>

      {/* Hamburger button (mobile only) */}
      <div className="sm:hidden ml-auto">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="text-white p-2 cursor-pointer"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 z-100 left-0 right-0 bg-teal border-b border-b-white p-4">
          <nav
            className="flex flex-col gap-6 items-start w-full"
            role="navigation"
          >
            <div className="flex flex-col gap-4 w-full">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
            </div>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638p"
              target="_blank"
              className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
            >
              Feedback
            </Link>

            {/* <Link
              href="/crew"
              className={`uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] ${pathname === '/crew' ? 'text-yellow-400' : 'bg-yellow text-black'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Crew
            </Link>*/}
            {/*<Link
              href="https://helfertool.wsaf.org.uk/wsaf2025/"
              target="_blank"
              className="uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] bg-yellow text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              Crew Signup
            </Link>
            <Link
              href="https://submit.wsaf.org.uk/2025/cfp"
              target="_blank"
              className="uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] bg-yellow text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              Performers Portal
            </Link>*/}
          </nav>
        </div>
      )}
    </header>
  );
}
