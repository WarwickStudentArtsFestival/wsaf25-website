import { ReactNode } from 'react';

export default function Question({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-semibold text-black leading-tight">
      { children }
    </h3>
  );
}