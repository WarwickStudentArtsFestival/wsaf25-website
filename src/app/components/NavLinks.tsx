import Link from 'next/link';

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-semibold uppercase">
      <li>
        <Link href="/perform" onClick={onClick}>
          Perform or Exhibit
        </Link>
      </li>
      <li>
        <Link href="/crew" onClick={onClick}>
          Join the Crew
        </Link>
      </li>
    </ul>
  );
}
