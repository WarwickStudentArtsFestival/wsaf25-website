import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row gap-4 md:gap-8 font-semibold uppercase">
      {[
        { href: '/perform', label: 'Perform or Exhibit' },
        { href: '/crew', label: 'Join the Crew' },
      ].map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            key={link.href}
            className="flex items-center justify-center gap-2"
          >
            <Link
              href={link.href}
              onClick={onClick}
              className={isActive ? 'text-yellow-400' : ''}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
