import Faq from '@/app/components/faq/faq';
import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function Crew() {
  return (
    <main>
      <PageHeader />
      <HighlightedHeading text="Crew" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        Join the WSAF Crew
      </h1>

      <Faq defaultTab="Crew" />
    </main>
  );
}
