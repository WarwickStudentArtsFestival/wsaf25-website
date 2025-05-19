'use client';
import React, { useMemo } from 'react';
import OptionsSidebar from './options-sidebar';
import GoToAllEvents from './GoToAllEvents';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import EventSessionCard from '@/app/events/components/event-sessions-list/event-session-card';
import useEventSessionsFilters from '@/app/events/components/event-sessions-list/event-sessions-filters';
import HighlightedHeading from '@/app/components/highlighted-heading';
import DatetimeSlider from '@/app/events/components/event-sessions-list/datetime-slider';

export default function EventSessionsList({
  eventSessions,
  context,
}: {
  eventSessions: EventSession[];
  context: EventSessionsListContext;
}) {
  const {
    isEventSessionInFilter,
    selectedFilterValues,
    sortAndGroupEventSessions,
    setFilter,
    selectedFilters,
  } = useEventSessionsFilters(context);

  const { sessionCount: filteredSessionCount, sessionGroups } = useMemo(() => {
    const filteredSessions = eventSessions.filter(isEventSessionInFilter);
    return sortAndGroupEventSessions(filteredSessions, context.venues);
  }, [eventSessions, selectedFilterValues]);

  return (
    <>
      <DatetimeSlider
        fromIndex={selectedFilterValues.dateFrom}
        toIndex={selectedFilterValues.dateTo}
        onChange={setFilter}
        eventCount={filteredSessionCount}
      />

      <div className="flex flex-row px-2 sm:px-4 relative">
        <aside className="w-1/6 hidden lg:block">
          <OptionsSidebar
            filteredCount={filteredSessionCount}
            totalCount={eventSessions.length}
            context={context}
            selectedFilters={selectedFilters}
            selectedFilterValues={selectedFilterValues}
            setFilter={setFilter}
          />
        </aside>

        <main className="flex-1 mb-16 space-y-8">
          {filteredSessionCount === 0 ? (
            <div>
              <p>No events found</p>
              <GoToAllEvents />
            </div>
          ) : (
            sessionGroups.map((group, i) => (
              <div key={i}>
                {group.name && <HighlightedHeading text={group.name} />}
                <div
                  className={`
        relative w-full grid gap-2
        grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2
      `}
                >
                  {group.sessions.map((eventSession) => (
                    <div key={eventSession.id} className="w-full sm:p-2">
                      <EventSessionCard eventSession={eventSession} />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </main>

        <footer className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredSessionCount} of {eventSessions.length} events
        </footer>
      </div>
    </>
  );
}
