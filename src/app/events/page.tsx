import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import { fetchEventSessions } from '@/lib/events';
import getContext from './components/event-sessions-list/event-sessions-list-context';
import LoadingPage from '@/app/events/components/loading-page';
import { Suspense } from 'react';
import EventSessionsList from '@/app/events/components/event-sessions-list/event-sessions-list';
import eventsConfig from '@config/events-config';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  if (!eventsConfig.enabled) return notFound();

  try {
    const eventSessions = await fetchEventSessions();

    return {
      title: 'Events',
      description: `Find out about the ${eventSessions.length} events happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!`,
    };
  } catch (error) {
    console.error('Error fetching talks from API', error);

    return {
      title: 'Events',
      description:
        "Find out what's happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!",
    };
  }
}

export const revalidate = 3600; // Fetch new information every hour

export default async function EventsPage() {
  if (!eventsConfig.enabled) return notFound();

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
    <main className="w-full grow">
      <PageHeader />
      <Suspense fallback={<LoadingPage eventCount={eventSessions.length} />}>
        <EventSessionsList
          eventSessions={eventSessions}
          context={context}
          sortByTime
        />
      </Suspense>
    </main>
  );
}
