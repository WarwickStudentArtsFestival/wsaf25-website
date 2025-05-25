'use client';
import React, { useMemo, useState } from 'react';
import OptionsSidebar from './options-sidebar';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import useEventSessionsFilters from '@/app/events/components/event-sessions-list/event-sessions-filters';
import DatetimeSlider from '@/app/events/components/event-sessions-list/datetime-slider';
import { FaFilter } from 'react-icons/fa';
import ListView from '@/app/events/components/event-sessions-list/list-view';
import TimelineView from '@/app/events/components/event-sessions-list/timeline-view';

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
  }, [
    eventSessions,
    context.venues,
    isEventSessionInFilter,
    sortAndGroupEventSessions,
  ]);

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <>
      <DatetimeSlider
        fromIndex={selectedFilterValues.dateFrom}
        toIndex={selectedFilterValues.dateTo}
        onChange={setFilter}
        eventCount={filteredSessionCount}
      />

      <div className="flex flex-row px-2 sm:px-4 relative">
        <aside className="sticky top-10 lg:top-24 h-[calc(100vh-15rem)] w-0 lg:w-auto z-20 mb-4">
          <div
            className={`transition-all duration-150 ease-in-out relative -left-80 lg:left-0 -ml-4 lg:ml-0 ${showMobileSidebar ? 'left-0' : '-left-80'}`}
          >
            <button
              className="lg:hidden top-10 -z-10 left-72 w-20 h-12 pl-8 absolute bg-white border border-slate-300 rounded-md flex text-black justify-center items-center rounded-md cursor-pointer"
              onClick={() => setShowMobileSidebar((prev) => !prev)}
            >
              <FaFilter />
            </button>
            <div className="relative border border-slate-300 rounded-md bg-white w-80 pb-2 lg:pb-0">
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
            </div>
          </div>
        </aside>

        {showMobileSidebar && (
          <div
            className="lg:hidden fixed left-0 right-0 bottom-0 top-0 bg-black/5 z-10"
            onClick={() => setShowMobileSidebar(false)}
          ></div>
        )}

        {selectedFilters.view === 'timeline' ? (
          <TimelineView
            sessionGroups={sessionGroups}
            venueInfo={context.venueInfo}
          />
        ) : (
          <ListView
            filteredSessionCount={filteredSessionCount}
            sessionCount={eventSessions.length}
            resetFilters={resetFilters}
            sessionGroups={sessionGroups}
          />
        )}

        <footer className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredSessionCount} of {eventSessions.length} events
        </footer>
      </div>
    </>
  );
}
