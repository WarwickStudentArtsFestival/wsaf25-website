'use client';

// import { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import NavLinks from './NavLinks';
// import SubmitButton from './SubmitButton';

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-100 w-full bg-teal h-16 border-b border-b-white flex justify-between items-center text-white px-4">
      <div className="w-48 text-left">
        <Link href="/" className="text-xl font-semibold">
          WSAF <span className="text-yellow">2025</span>
        </Link>
      </div>

      <nav className="align-center">
        <NavLinks />
      </nav>

      {/* <div className="md:block hidden md:visible w-48 mr-4 text-right">
        <SubmitButton />
      </div> */}

      {/* <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="text-white p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div> */}

      {/* {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-teal border-b border-b-white p-4 z-50">
          <nav role="navigation">
            <NavLinks onClick={() => setMobileMenuOpen(false)} />
          </nav>
        </div>
      )} */}
    </header>
  );
}
