'use client';
import HighlightedHeading from '@/app/components/highlighted-heading';
import GeneralFaq from '@/app/(home)/components/faq/general-faq';
import { useState } from 'react';
import SubmissionsFaq from '@/app/(home)/components/faq/submissions-faq';
import CrewFaq from '@/app/(home)/components/faq/crew-faq';

enum FaqTabs {
  GENERAL = 'General',
  SUBMISSIONS = 'Submissions',
  CREW = 'Crew',
}

export default function Faq({ defaultTab }: { defaultTab?: string }) {
  const [selectedTab, setSelectedTab] = useState<FaqTabs>(
    (defaultTab as FaqTabs) || FaqTabs.GENERAL,
  );

  return (
    <section className="py-4 pb-8">
      <HighlightedHeading text="FAQ" />
      <h2 className="text-teal text-2xl font-semibold mb-2">
        Frequently Asked Questions
      </h2>

      <div className="inline-flex rounded-md p-1.5 bg-slate-200 gap-1.5 justify-center items-center">
        {Object.values(FaqTabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-1 uppercase text-xs xs:text-sm text-slate-600 hover:cursor-pointer rounded-md border-slate-400 hover:bg-slate-300 hover:drop-shadow-sm ${selectedTab === tab ? 'bg-slate-300 border drop-shadow-sm' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 my-4">
        {selectedTab === FaqTabs.GENERAL && <GeneralFaq />}
        {selectedTab === FaqTabs.SUBMISSIONS && <SubmissionsFaq />}
        {selectedTab === FaqTabs.CREW && <CrewFaq />}
      </div>
    </section>
  );
}
