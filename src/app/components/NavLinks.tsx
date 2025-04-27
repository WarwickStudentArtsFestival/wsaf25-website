import Link from 'next/link';

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-semibold uppercase">
      {[
        // { href: '/', label: 'Home' },
        // { href: '/faq', label: 'FAQ' },
        { href: '/perform', label: 'Perform or Exhibit' },
        { href: '/crew', label: 'Join the Crew' },
        // { href: '/history', label: 'History' },
        // { href: '/press', label: 'Press Kit' },
        // { href: '/wpaint', label: 'W-PAINT' },
      ].map((link) => (
        <li key={link.href} className="flex items-center justify-center gap-2">
          <Link href={link.href} onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
