import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';

interface ErrorMessageProps {
  msg: string;
}

export default function ErrorMessage({ msg }: ErrorMessageProps) {
  return (
    <main className="flex-grow w-full">
      <PageHeader />
      <HighlightedHeading text={msg} />
      <Image
        src="/rotating.gif"
        className="mx-auto"
        alt="loading sundae"
        width={500}
        height={500}
        unoptimized
      />
    </main>
  );
}
