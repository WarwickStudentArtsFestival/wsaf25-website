import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();

  // const performIsActive = pathname === '/perform';
  const scheduleIsActive = pathname === '/schedule';
  const crewIsActive = pathname === '/crew';

  return (
    <ul className="flex flex-row gap-4 md:gap-8 font-semibold uppercase">
      {/* <li className="flex items-center justify-center gap-2">
        <Link
          href="/perform"
          onClick={onClick}
          className={performIsActive ? 'text-yellow-400' : ''}
        >
          Perform
          <span className="xs:inline-block hidden">&nbsp;or Exhibit</span>
        </Link>
      </li> */}
      <li className="flex items-center justify-center gap-2">
        <Link
          href="/schedule"
          onClick={onClick}
          className={scheduleIsActive ? 'text-yellow-400' : ''}
        >
          <span className="xs:inline-block hidden">View the&nbsp;</span>
          Schedule
        </Link>
      </li>
      <li className="flex items-center justify-center gap-2">
        <Link
          href="/crew"
          onClick={onClick}
          className={crewIsActive ? 'text-yellow-400' : ''}
        >
          <span className="xs:inline-block hidden">Join the&nbsp;</span>Crew
        </Link>
      </li>
    </ul>
  );
}
