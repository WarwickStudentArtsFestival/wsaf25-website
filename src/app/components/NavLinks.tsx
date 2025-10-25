import Link from 'next/link';
import { usePathname } from 'next/navigation';
import eventsConfig from '@config/events-config';

interface Props {
  onClick?: () => void;
}

interface NavItem {
  shortLabel: string;
  longLabel?: string;
  href: string;
}

const navItems: NavItem[] = eventsConfig.enabled
  ? [
      { shortLabel: 'Events', href: '/events' },
      { shortLabel: 'Venues', href: '/venues' },
    ]
  : [
      {
        shortLabel: 'Perform',
        longLabel: 'Perform or Exhibit',
        href: '/perform',
      },
      {
        shortLabel: 'Crew',
        longLabel: 'Join the Crew',
        href: '/crew',
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
