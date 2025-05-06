import type { Metadata } from 'next';
import { fetchEvents } from '@/app/lib/fetchEvents';
import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import Events from './components/events/Events';

export const metadata: Metadata = {
  title: 'WSAF Events',
  description: 'List of all the events on in WSAF 2025',
};

export default async function EventsPage() {
  const talks = await fetchEvents();

  if (talks === 'API_ERROR') {
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  const allTracks = Array.from(new Set(talks.map((talk) => talk.track.en)));

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Events" />
      <h1 className="text-teal text-2xl font-semibold mb-2">WSAF Events</h1>
      <Events allTalks={talks} initialTracks={allTracks} />
    </main>
  );
}
