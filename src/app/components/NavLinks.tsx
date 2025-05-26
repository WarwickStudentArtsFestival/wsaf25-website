import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  onClick?: () => void;
}

interface NavItem {
  shortLabel: string;
  longLabel?: string;
  href: string;
}

const navItems: NavItem[] = [
  { shortLabel: 'Venues', href: '/venues' },
  { shortLabel: 'Events', href: '/events' },
  // {
  //   shortLabel: 'Perform',
  //   longLabel: 'Perform or Exhibit',
  //   href: '/perform',
  // },
  {
    shortLabel: 'Join the Crew',
    // longLabel: 'Join the Crew',
    // shortLabel: 'Crew',
    // longLabel: 'Join the Crew',
    href: '/crew',
  },
  {
    shortLabel: 'Performers Portal',
    href: 'https://pretalx.wsaf.org.uk/orga/login/',
  },
];

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <ul className="flex flex-col sm:flex-row z-65 flex-1 gap-4 md:gap-8 font-semibold uppercase">
      {navItems.map(({ shortLabel, longLabel, href }) => {
        const active = isActive(href);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className={`block p-2 align-center underline-offset-4 hover:underline ${
                active ? 'text-yellow-400' : 'text-white'
              }`}
              title={longLabel ?? shortLabel}
              aria-label={longLabel ?? shortLabel}
            >
              <span className="inline">
                {longLabel ? (
                  <>
                    <span className="hidden xs:inline">{longLabel}</span>
                    <span className="inline xs:hidden">{shortLabel}</span>
                  </>
                ) : (
                  shortLabel
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
