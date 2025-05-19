'use client';
import React, { useMemo } from 'react';
import OptionsSidebar from './options-sidebar';
import GoToAllEvents from './GoToAllEvents';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import EventSessionCard from '@/app/events/components/event-sessions-list/event-session-card';
import useEventSessionsFilters from '@/app/events/components/event-sessions-list/event-sessions-filters';

export default function EventSessionsList({
  eventSessions,
  context,
}: {
  eventSessions: EventSession[];
  context: EventSessionsListContext;
}) {
  const { isEventSessionInFilter, selectedFilterValues } =
    useEventSessionsFilters(context);

  const filteredEventSessions = useMemo(() => {
    return eventSessions.filter(isEventSessionInFilter);
  }, [eventSessions, selectedFilterValues]);

  return (
    <>
      {/*      {genreText && (
        <div className="sticky top-15 mx-auto flex items-center z-40 pt-4 justify-center bg-white w-full px-4 md:px-8">
          <div className="bg-purple-200 p-2 h-fit text-purple-800 border border-purple-800 rounded-full">
            <TrackIcon track={genreText} size={25} />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl md:text-4xl font-bold text-teal">
              {genreText}
            </h1>
            <h3 className="text-teal font-semibold italic">at WSAF 2025...</h3>
          </div>
        </div>
      )}

      <TimeSelection />*/}

      <div className="flex flex-row px-2 sm:px-4 relative">
        <aside className="w-1/6 hidden lg:block">
          <OptionsSidebar
            filteredCount={filteredEventSessions.length}
            totalCount={eventSessions.length}
            context={context}
          />
        </aside>

        <main className="flex-1 mb-16 space-y-8">
          {filteredEventSessions.length === 0 ? (
            <p>No events found</p>
          ) : (
            <div
              className={`
        relative w-full grid gap-2
        grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2
      `}
            >
              {filteredEventSessions.map((eventSession) => (
                <div key={eventSession.id} className="w-full sm:p-2">
                  <EventSessionCard eventSession={eventSession} />
                </div>
              ))}
            </div>
          )}

          {filteredEventSessions.length !== eventSessions.length && (
            <div className="mt-8 flex justify-center">
              <GoToAllEvents />
            </div>
          )}
        </main>

        <footer className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredEventSessions.length} of {eventSessions.length}{' '}
          events
        </footer>
      </div>
    </>
  );
}
