import { ReactNode } from 'react';

export default function Answer({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm">
      { children }
    </p>
  );
}