'use client';
import React, { useMemo } from 'react';
import OptionsSidebar from './options-sidebar';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import useEventSessionsFilters from '@/app/events/components/event-sessions-list/event-sessions-filters';
import DatetimeSlider from '@/app/events/components/event-sessions-list/datetime-slider';
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
        <aside className="hidden sticky top-40 lg:block h-[calc(100vh)] ">
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

        {selectedFilters.view === 'timeline' ? (
          <TimelineView
            filteredSessionCount={filteredSessionCount}
            sessionCount={eventSessions.length}
            resetFilters={resetFilters}
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
