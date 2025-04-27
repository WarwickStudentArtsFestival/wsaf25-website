import Faq from '@/app/(home)/components/faq/faq';
import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function Perform() {
  return (
    <main>
      <PageHeader />
      <HighlightedHeading text="Submissions" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        Perform or Exhibit at WSAF
      </h1>

      <Faq defaultTab="Submissions" />
    </main>
  );
}
