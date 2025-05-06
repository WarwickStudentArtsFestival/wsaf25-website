import React from 'react';
import Image from 'next/image';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function ErrorMessage() {
  return (
    <main className="flex-grow w-full">
      <PageHeader />
      <HighlightedHeading text="W-please-set-the-api-token" />
      <Image
        src="/rotating.gif"
        className="mx-auto"
        alt="loading sundae"
        width={500}
        height={500}
        unoptimized
      />
      <div className="bg-red-100 border border-red-300 mb-4 w-fit mx-auto text-red-800 p-4 rounded">
        Failed to fetch Pretalx API.<br></br>Please set the API key in{' '}
        <code>.env.local</code>.
      </div>
    </main>
  );
}
