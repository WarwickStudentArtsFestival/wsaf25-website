import React from 'react';
import type { Metadata } from 'next';
import { fetchSchedule } from './lib/fetchSchedule';
import ErrorMessage from './components/ErrorMessage';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import TalkList from './components/TalkList';
import SummaryStatistics from './components/SummaryStatistics';

export const metadata: Metadata = {
  title: 'WSAF Schedule',
};

export default async function Schedule() {
  const talks = await fetchSchedule();

  if (talks === 'API_ERROR') {
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  const filteredTalks = talks.filter((talk) => talk.track.en == 'MTW Stagefest');

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Schedule" />
      <h1 className="text-teal text-2xl font-semibold mb-2">WSAF Schedule</h1>

      <div className="flex flex-row px-4">
        <div className="w-1/6">
          <SummaryStatistics talks={talks} />
        </div>
        <div className="flex-1">
          <TalkList talks={filteredTalks} />
        </div>
      </div>
    </main>
  );
}
