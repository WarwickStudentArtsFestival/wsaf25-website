import type { Metadata } from 'next';
import { fetchTalks } from '@/app/lib/fetchTalks';
import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import EventsList from './components/events-list/EventsList';

export const metadata: Metadata = {
  title: 'WSAF Events',
  description: 'List of all the events on in WSAF 2025',
};

export default async function EventsPage() {
  let talks = await fetchTalks();
  if (talks === 'API_ERROR') {
    console.error('Error fetching talks from API');
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }
  talks = talks.sort(() => Math.random() - 0.5);
  const publicVisibleTalks = talks.filter((talk) =>
    ['confirmed', 'accepted'].includes(talk.state),
  );

  return (
    <main className="w-full">
      <PageHeader />
      <EventsList allTalks={publicVisibleTalks} />
    </main>
  );
}
