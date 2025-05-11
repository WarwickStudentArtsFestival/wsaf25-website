import { ReactNode } from 'react';

type FooterSectionProps = {
  title: string | ReactNode;
  children: ReactNode;
};

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg text-left text-yellow font-semibold mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
