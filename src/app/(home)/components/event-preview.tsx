import HighlightedHeading from '@/app/components/highlighted-heading';
import ErrorMessage from '@/app/components/ErrorMessage';
import { fetchEventSessions } from '@/lib/events';
import EventSessionCard from '@/app/events/components/event-sessions-list/list-view/event-session-card';
import AutoScrollContainer from './auto-scroller';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import React from 'react';

export default async function EventPreview() {
  let eventSessions;
  try {
    eventSessions = await fetchEventSessions();
  } catch (error) {
    console.error('Error fetching talks from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  return (
    <main className="w-full overflow-hidden">
      <section className="bg-teal text-white pt-8">
        <HighlightedHeading text="What's on at WSAF?" />
        <h2 className="text-white text-2xl font-semibold pb-4">
          Event Preview
        </h2>
      </section>

      <div className="bg-teal pb-8 overflow-hidden">
        <AutoScrollContainer>
          <div className="flex gap-4 px-4 py-2">
            {eventSessions.map((eventSession, index) => (
              <div
                key={`${eventSession.id}-${index}`}
                className="min-w-[300px] max-w-[300px] flex-shrink-0 border border-slate-300 rounded-md bg-white"
              >
                <EventSessionCard eventSession={eventSession} />
              </div>
            ))}
          </div>
        </AutoScrollContainer>

        <Link
          href="/events"
          className="inline-block bg-purple px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105 mt-4 mx-4"
        >
          <span className="text-xl uppercase text-white font-bold">
            <FiArrowRight className="inline mr-2 mb-1" />
            View All Events
          </span>
        </Link>
      </div>
    </main>
  );
}
