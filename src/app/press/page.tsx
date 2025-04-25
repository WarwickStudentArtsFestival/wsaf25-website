import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function Crew() {
  return (
    <main>
      <PageHeader />
      <HighlightedHeading text="Press Kit" />
      {/* <h1 className="text-teal text-2xl font-semibold mb-2">
        Press Kit
      </h1> */}
    </main>
  );
}
