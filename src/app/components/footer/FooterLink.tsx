import Link from 'next/link';
import { ComponentType, ReactNode } from 'react';

type FooterLinkProps = {
  href: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
  children?: ReactNode;
  newTab?: boolean;
};

export default function FooterLink({
  href,
  label,
  icon: Icon,
  children,
  newTab,
}: FooterLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`text-muted-foreground hover:underline hover:text-slate-200`}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {Icon ? (
          <>
            <span className="sr-only">{label}</span>
            <Icon className="h-5 w-5" />
          </>
        ) : (
          children || label
        )}
      </Link>
    </li>
  );
}
