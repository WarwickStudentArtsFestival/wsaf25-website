import { FaArrowLeft } from 'react-icons/fa';
import HighlightedHeading from '@/app/components/highlighted-heading';
import EventSessionCard from '@/app/events/components/event-sessions-list/event-session-card';
import React from 'react';
import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';

export default function ListView({
  filteredSessionCount,
  sessionCount,
  resetFilters,
  sessionGroups,
  disableVenues = false,
}: {
  filteredSessionCount: number;
  sessionCount: number;
  resetFilters: () => void;
  sessionGroups: EventSessionGroup[];
  disableVenues?: boolean;
}) {
  return (
    <main className="flex-1 mb-16 space-y-8">
      {filteredSessionCount === 0 ? (
        sessionCount === 0 ? (
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
  );
}
