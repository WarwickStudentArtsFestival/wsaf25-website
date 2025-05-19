'use client';
import React, { useMemo } from 'react';
import OptionsSidebar from './options-sidebar';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import EventSessionCard from '@/app/events/components/event-sessions-list/event-session-card';
import useEventSessionsFilters from '@/app/events/components/event-sessions-list/event-sessions-filters';
import HighlightedHeading from '@/app/components/highlighted-heading';
import DatetimeSlider from '@/app/events/components/event-sessions-list/datetime-slider';
import { FaArrowLeft } from 'react-icons/fa';

export default function EventSessionsList({
  eventSessions,
  context,
  disableVenues = false,
}: {
  eventSessions: EventSession[];
  context: EventSessionsListContext;
  disableVenues?: boolean;
}) {
  const {
    isEventSessionInFilter,
    selectedFilterValues,
    sortAndGroupEventSessions,
    setFilter,
    selectedFilters,
    resetFilters,
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
            handleReset={resetFilters}
            disableVenues={disableVenues}
          />
        </aside>

        <main className="flex-1 mb-16 space-y-8">
          {filteredSessionCount === 0 ? (
            eventSessions.length === 0 ? (
              <p>No events were found. Please check back later!</p>
            ) : (
              <div className="flex items-center flex-col gap-2">
                <p>No events were found using your filters.</p>
                <button
                  className="text-black gap-1 flex items-center hover:cursor-pointer border border-slate-300 rounded-md hover:bg-slate-100 justify-center px-4 py-1"
                  onClick={resetFilters}
                >
                  <FaArrowLeft />
                  Clear Filters
                </button>
              </div>
            )
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
                      <EventSessionCard
                        eventSession={eventSession}
                        hideVenue={disableVenues}
                      />
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
