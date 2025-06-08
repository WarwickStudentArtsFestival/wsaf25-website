import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import {
  EventWithSessions,
  fetchEvent,
  fetchEventSessions,
} from '@/lib/events';
import React from 'react';
import { ResolvingMetadata } from 'next';
import { formatTime } from '@/lib/dates';
import EventCard from '@/app/events/[slug]/components/event-card';
import { fetchVenues } from '@/lib/venues';

export const revalidate = 3600; // Fetch new information every hour

export async function generateStaticParams() {
  const sessions = await fetchEventSessions();
  const eventSlugs = [
    ...new Set(sessions.map((session) => session.event.slug)),
  ];

  return eventSlugs.map((eventSlug) => ({
    slug: eventSlug,
  }));
}

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata,
) {
  const { slug } = await params;

  try {
    const event = await fetchEvent(slug);
    if (!event) {
      return {
        title: 'Events',
        description:
          "Find out what's happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!",
      };
    }

    const sessionDescription = event.sessions
      .map(
        (session) =>
          `${session.start.toLocaleDateString('en-GB', { weekday: 'short' })} ${formatTime(session.start).replace(' ', '')} - ${formatTime(session.end).replace(' ', '')} (${session.venue.name})`,
      )
      .join('\n');

    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: `${event.name}${event.artist.name ? ` (${event.artist.name})` : ''}`,
      description: `${sessionDescription}\n\n${event.shortDescription || event.description}`,
      openGraph: event.image
        ? {
            images: [event.image, ...previousImages],
          }
        : {},
    };
  } catch (error) {
    console.error('Error fetching event from API', error);
    return {
      title: 'Events',
      description:
        "Find out what's happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;

  let event: EventWithSessions | null = null;
  // TODO: Better 404 page
  try {
    event = await fetchEvent(slug);
  } catch (error) {
    console.error('Error fetching event', error);
    return <ErrorMessage msg="Unknown error" />;
  }

  const venues = await fetchVenues();

  if (!event) return <ErrorMessage msg={`Event '${slug}' not found!`} />;

  return (
    <main>
      <Toaster position="top-center" />
      <PageHeader />

      <div className="-mt-2 md:mt-4 md:mb-4">
        <EventCard event={event} venues={venues} />
      </div>
    </main>
  );
}
