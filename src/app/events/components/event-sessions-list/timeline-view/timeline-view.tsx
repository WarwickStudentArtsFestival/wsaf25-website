import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import React, { useMemo, useRef } from 'react';
import TimelineEventSessionCard from '@/app/events/components/event-sessions-list/timeline-view/timeline-event-session-card';
import Link from 'next/link';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import useTimelinePrinting from '@/app/events/components/event-sessions-list/timeline-view/use-timeline-printing';
import constructTimelineData, {
  TimelineData,
  TimelineDataTime,
} from '@/app/events/components/event-sessions-list/timeline-view/construct-timeline-data';
import { EventSession, getEventCategory } from '@/lib/events';

// Grey out past times in the timeline
const GREY_PAST_TIMES = false;

function CellTimelineEventSessionCards({
  eventSessions,
  selectEvent,
}: {
  eventSessions: EventSession[];
  selectEvent: (slug: string) => void;
}) {
  if (eventSessions.length === 0)
    return <span className="block min-h-[0.5rem]"></span>;

  return eventSessions.map((eventSession) => (
    <TimelineEventSessionCard
      eventSession={eventSession}
      key={eventSession.id}
      selectEvent={selectEvent}
    />
  ));
}

function ParentCellTimelineEventSessionCards({
  parentSession,
  parentSessionMode,
  eventSessions,
  selectEvent,
}: {
  parentSession: EventSession;
  parentSessionMode: 'top' | 'middle' | 'bottom' | 'single';
  eventSessions: EventSession[];
  selectEvent: (slug: string) => void;
}) {
  const category = getEventCategory(parentSession.event);

  let borderClass = 'border-slate-300 border-l-2 border-r-2';
  if (parentSessionMode === 'top') {
    // Round top corners, top border
    borderClass += ' rounded-tl-md rounded-tr-md border-t-2';
  } else if (parentSessionMode === 'bottom') {
    // Round bottom corners, bottom border
    borderClass += ' rounded-bl-md rounded-br-md border-b-2';
  } else if (parentSessionMode === 'single') {
    // Round all corners, top and bottom border
    borderClass += ' rounded-md border-t border-b';
  }

  return (
    <div
      className={`w-full h-full flex flex-col px-2 ${borderClass}`}
      style={{ background: `${category.colour}05`, color: category.colour }}
    >
      {(parentSessionMode === 'top' || parentSessionMode === 'single') && (
        <TimelineEventSessionCard
          eventSession={parentSession}
          parentEventStyling
          selectEvent={selectEvent}
        />
      )}
      <CellTimelineEventSessionCards
        eventSessions={eventSessions}
        selectEvent={selectEvent}
      />
    </div>
  );
}

function TimelineRow({
  time,
  selectEvent,
  currentTime,
}: {
  time: TimelineDataTime;
  selectEvent: (slug: string) => void;
  currentTime: number;
}) {
  return (
    <tr key={time.startTime} className="h-full">
      {/* time header */}
      {time.type === 'keytime' && (
        <th
          className={`text-black text-sm w-1/12 font-semibold sticky left-0 z-[2] border-r border-slate-200 align-top pt-0.5 ${GREY_PAST_TIMES && currentTime > time.startTime ? 'bg-slate-100' : 'bg-white'} ${time.type === 'keytime' ? 'border-t' : ''}`}
          rowSpan={time.startTimeSpan}
        >
          <p className="min-h-[0.5rem] border-slate-200">
            {new Date(time.startTime).toLocaleTimeString('en-gb', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })}
          </p>
        </th>
      )}

      {time.venueSessions
        .filter(
          (venueSession) =>
            venueSession.rowSpan === 1 || venueSession.eventStart,
        )
        .map((venueSession, j) => (
          <td
            key={j}
            rowSpan={venueSession.rowSpan}
            className={`h-full px-1 ${GREY_PAST_TIMES && currentTime > time.startTime ? 'bg-slate-100' : ''} ${time.type === 'keytime' ? 'border-t border-slate-200' : ''}`}
          >
            {venueSession.parentSession ? (
              <ParentCellTimelineEventSessionCards
                parentSession={venueSession.parentSession}
                eventSessions={venueSession.eventSessions}
                parentSessionMode={venueSession.parentSessionMode || 'single'}
                selectEvent={selectEvent}
              />
            ) : (
              <CellTimelineEventSessionCards
                eventSessions={venueSession.eventSessions}
                selectEvent={selectEvent}
              />
            )}
          </td>
        ))}
    </tr>
  );
}

export default function TimelineView({
  sessionGroups,
  venueInfo,
  sessionCount,
  resetFilters,
  selectEvent,
}: {
  sessionGroups: EventSessionGroup[];
  venueInfo: Record<string, { order: number; name: string; slug: string }>;
  sessionCount: number;
  resetFilters: () => void;
  selectEvent: (slug: string) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useTimelinePrinting(contentRef);

  const timeline = useMemo<TimelineData>(
    () => constructTimelineData(sessionGroups, venueInfo),
    [sessionGroups, venueInfo],
  );

  const currentTime = new Date().getTime();

  if (sessionGroups.length === 0) {
    return (
      <main className="flex flex-1 space-y-8 flex-col flex-grow mt-4">
        {sessionCount === 0 ? (
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
        )}
      </main>
    );
  }

  return (
    <main className="lg:pt-4 pb-4 max-w-full">
      <div className="flex align-right justify-end mb-4 2xl:mr-8">
        <button
          className="text-black gap-1 flex items-center hover:cursor-pointer border border-slate-300 rounded-md hover:bg-slate-100 justify-center px-4 py-1"
          onClick={reactToPrintFn}
        >
          <FaPrint />
          Print
        </button>
      </div>

      {/* Parent element with border */}
      <div
        ref={contentRef}
        className="overflow-x-auto border-2 border-slate-300 w-max max-w-full overflow-y-auto max-h-[calc(100vh-9rem)]"
      >
        {/* Table (scrollable) */}
        <table className="table-fixed border-separate border-spacing-0 3xl:w-full">
          <thead className="bg-white">
            <tr className="text-black">
              <th className="py-1 px-2 bg-white sticky left-0 top-0 z-[3] w-[150px] border-b border-r border-slate-200">
                <p className="min-w-15">Time</p>
              </th>
              {/* venue header */}
              {timeline.venues.map((venue) => (
                <th
                  key={venue}
                  className="py-1 px-2 bg-white sticky top-0 z-[1] w-[150px] border-b border-slate-200"
                >
                  <Link
                    href={`/venues/${venueInfo[venue]?.slug || ''}`}
                    className="block cursor-pointer hover:scale-[1.02] w-max mx-auto"
                  >
                    {venue}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Day header row */}
            {timeline.times.map((time, i) =>
              time.type === 'day' ? (
                <tr key={time.startTime}>
                  <th
                    className={`border-t border-t-slate-200 border-b-2 border-b-slate-300 border-r border-r-slate-200 ${currentTime > time.startTime ? 'bg-slate-100' : 'bg-white'} sticky ${i === 0 ? 'top-8' : 'top-4'}`}
                  />
                  <th
                    colSpan={timeline.venues.length}
                    className={`border-t border-t-slate-200 border-b-2 border-slate-300 ${GREY_PAST_TIMES && currentTime > time.startTime ? 'bg-slate-100' : 'bg-white'} sticky ${i === 0 ? 'top-8' : 'top-4'}`}
                  >
                    <div className={i === 0 ? '' : 'pt-4'}>
                      <HighlightedHeading
                        text={new Date(time.startTime).toLocaleDateString(
                          'en-gb',
                          {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                          },
                        )}
                        className="text-black"
                      />
                    </div>
                  </th>
                </tr>
              ) : (
                <TimelineRow
                  time={time}
                  selectEvent={selectEvent}
                  key={time.startTime}
                  currentTime={currentTime}
                />
              ),
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
