import type { Metadata } from 'next';
import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import EventsList from './components/events-list/EventsList';
import { fetchEvents } from '../lib/events';

export const metadata: Metadata = {
  title: 'WSAF Events',
  description: 'List of all the events on in WSAF 2025',
};

export default async function EventsPage() {
  let events;

  try {
    events = await fetchEvents();
  } catch (error) {
    console.error('Error fetching talks from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  const publicEvents = events.filter((event) =>
    (process.env.NEXT_PUBLIC_TALK_STATE_TO_SHOW || '')
      .split(',')
      .includes(event.state),
  );

  return (
    <main className="w-full">
      <PageHeader />
      <EventsList events={publicEvents} />
    </main>
  );
}
