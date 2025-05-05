import React from 'react';
import type { Metadata } from 'next';
import { fetchSchedule } from './lib/api';
import ErrorMessage from './components/ErrorMessage';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import EventList from './components/EventList';

export const metadata: Metadata = {
  title: 'WSAF Schedule',
};

export default async function Schedule() {
  const talks = await fetchSchedule();

  if (talks === 'API_ERROR') {
    return <ErrorMessage />;
  }

  return (
    <main className="p-4 w-full">
      <PageHeader />
      <HighlightedHeading text="Schedule" />
      <h1 className="text-teal text-2xl font-semibold mb-2">WSAF Schedule</h1>
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>
      <div className="mb-6 p-4 bg-gray-100 rounded shadow flex flex-col sm:flex-row gap-4">
        <div>
          <span className="font-semibold">Total performances:</span>{' '}
          {talks.length}
        </div>
      </div>
      <EventList talks={talks} />
    </main>
  );
}
