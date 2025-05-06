import type { Metadata } from 'next';
import { fetchSchedule } from './lib/fetchSchedule';
import ErrorMessage from './components/ErrorMessage';
import PageHeader from '../components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import Schedule from './components/Schedule';

export const metadata: Metadata = {
  title: 'WSAF Schedule',
};

export default async function SchedulePage() {
  const talks = await fetchSchedule();

  if (talks === 'API_ERROR') {
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  const allTracks = Array.from(new Set(talks.map((talk) => talk.track.en)));

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Schedule" />
      <h1 className="text-teal text-2xl font-semibold mb-2">WSAF Schedule</h1>

      <Schedule allTalks={talks} initialTracks={allTracks} />
    </main>
  );
}
