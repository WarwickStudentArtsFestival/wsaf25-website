import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import SubmissionsFaq from '@/app/(home)/components/faq/submissions-faq';

import HighlightCountdown from '../(home)/components/highlight-countdown';

export default function Perform() {
  return (
    <main className="mb-4">
      <PageHeader />
      <div className="m-4">
        <HighlightedHeading text="Perform Or Exhibit" />
      </div>
      <HighlightCountdown />
      {/* <h1 className="text-teal text-2xl font-semibold mb-2">
        Something here 
      </h1> */}
      <div className="max-w-7xl mx-8 xl:mx-auto p-4">
        <HighlightedHeading text="FAQ" />
        <SubmissionsFaq />
      </div>
    </main>
  );
}
