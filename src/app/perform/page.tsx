import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import SubmissionsFaq from '@/app/(home)/components/faq/submissions-faq';

export default function Perform() {
  return (
    <main className="mb-4">
      <PageHeader />
      <div className="mt-4">
        <HighlightedHeading text="Perform Or Exhibit" />
      </div>
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
