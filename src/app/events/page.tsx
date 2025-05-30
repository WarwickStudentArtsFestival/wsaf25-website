import type { Metadata } from 'next';
import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import { fetchEventSessions } from '@/lib/events';
import EventSessionsList from '@/app/events/components/event-sessions-list/event-sessions-list';
import getContext from './components/event-sessions-list/event-sessions-list-context';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'WSAF Events',
  description: 'List of all the events on in WSAF 2025',
};

export const revalidate = 3600; // Fetch new information every hour

export default async function EventsPage() {
  let eventSessions, context;

  try {
    eventSessions = await fetchEventSessions();
  } catch (error) {
    console.error('Error fetching talks from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  try {
    context = await getContext(eventSessions);
  } catch (error) {
    console.error('Error fetching context from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  return (
    <main className="w-full">
      <PageHeader />
      <Suspense fallback={<div>Loading events...</div>}>
        <EventSessionsList eventSessions={eventSessions} context={context} />
      </Suspense>
    </main>
  );
}
