'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import NavLinks from './NavLinks';
import mainConfig from '@config/main-config';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="z-50 sticky top-0 w-full bg-teal h-16 border-b border-b-white flex items-center text-white px-4">
      {/* WSAF logo (left) */}
      <div className="text-left w-32 flex-shrink-0">
        <Link href="/" className="text-xl font-semibold">
          WSAF <span className="text-yellow">{mainConfig.dates.year}</span>
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
        {mainConfig.header.rightButtons.discord &&
          mainConfig.socials.discordInvite && (
            <Link
              href={mainConfig.socials.discordInvite}
              target="_blank"
              className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
            >
              Discord
            </Link>
          )}

        {mainConfig.header.rightButtons.feedback && mainConfig.feedback.url && (
          <Link
            href={mainConfig.feedback.url}
            target="_blank"
            className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
          >
            Feedback
          </Link>
        )}

        {mainConfig.header.rightButtons.crewPage && (
          <Link
            href="/crew"
            className={`uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] ${pathname === '/crew' ? 'text-yellow-400' : 'bg-yellow text-black'}`}
          >
            <span className="hidden lg:inline">Join the </span>Crew
          </Link>
        )}

        {mainConfig.header.rightButtons.crewSignup &&
          mainConfig.crew.signupUrl && (
            <Link
              href={mainConfig.crew.signupUrl}
              target="_blank"
              className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
            >
              Crew <span className="hidden lg:inline">Signup</span>
            </Link>
          )}

        {mainConfig.header.rightButtons.submissionsPortal &&
          mainConfig.submissions.submitUrl && (
            <Link
              href={mainConfig.submissions.submitUrl}
              target="_blank"
              className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
            >
              Performers <span className="hidden lg:inline">Portal</span>
            </Link>
          )}
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

            {mainConfig.header.rightButtons.discord &&
              mainConfig.socials.discordInvite && (
                <Link
                  href={mainConfig.socials.discordInvite}
                  target="_blank"
                  className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
                >
                  Discord
                </Link>
              )}

            {mainConfig.header.rightButtons.feedback &&
              mainConfig.feedback.url && (
                <Link
                  href={mainConfig.feedback.url}
                  target="_blank"
                  className="uppercase font-bold px-2.5 py-1.5 hover:scale-[102%] bg-yellow text-black"
                >
                  Feedback
                </Link>
              )}

            {mainConfig.header.rightButtons.crewPage && (
              <Link
                href="/crew"
                className={`uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] ${pathname === '/crew' ? 'text-yellow-400' : 'bg-yellow text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Crew
              </Link>
            )}

            {mainConfig.header.rightButtons.crewSignup &&
              mainConfig.crew.signupUrl && (
                <Link
                  href={mainConfig.crew.signupUrl}
                  target="_blank"
                  className="uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] bg-yellow text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Crew Signup
                </Link>
              )}
            {mainConfig.header.rightButtons.submissionsPortal &&
              mainConfig.submissions.submitUrl && (
                <Link
                  href={mainConfig.submissions.submitUrl}
                  target="_blank"
                  className="uppercase mx-auto font-bold px-4 py-2 hover:scale-[102%] bg-yellow text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Performers Portal
                </Link>
              )}
          </nav>
        </div>
      )}
    </header>
  );
}
