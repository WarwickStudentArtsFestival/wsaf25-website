import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import React, { useMemo, useRef } from 'react';
import TimelineEventSessionCard from '@/app/events/components/event-sessions-list/timeline-view/timeline-event-session-card';
import Link from 'next/link';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import useTimelinePrinting from '@/app/events/components/event-sessions-list/timeline-view/use-timeline-printing';
import constructTimelineData, {
  TimelineData,
} from '@/app/events/components/event-sessions-list/timeline-view/construct-timeline-data';

export default function TimelineView({
  sessionGroups,
  venueInfo,
  sessionCount,
  resetFilters,
}: {
  sessionGroups: EventSessionGroup[];
  venueInfo: Record<string, { order: number; name: string; slug: string }>;
  sessionCount: number;
  resetFilters: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useTimelinePrinting(contentRef);

  const timeline = useMemo<TimelineData>(
    () => constructTimelineData(sessionGroups, venueInfo),
    [sessionGroups, venueInfo],
  );

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
        <table className="table-fixed border-separate border-spacing-0">
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
                    className={`border-t border-t-slate-200 border-b-2 border-b-slate-300 border-r border-r-slate-200 bg-white sticky ${i === 0 ? 'top-8' : 'top-4'}`}
                  />
                  <th
                    colSpan={timeline.venues.length}
                    className={`border-t border-t-slate-200 border-b-2 border-slate-300 bg-white sticky ${i === 0 ? 'top-8' : 'top-4'}`}
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
                <tr key={time.startTime} className="h-full">
                  {/* time header */}
                  {time.type === 'keytime' && (
                    <th
                      className={`text-black text-sm w-1/12 font-semibold bg-white sticky left-0 z-[2] border-r border-slate-200 align-top pt-0.5 ${time.type === 'keytime' ? 'border-t' : ''}`}
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
                        className={`h-full px-1 ${time.type === 'keytime' ? 'border-t border-slate-200' : ''}`}
                      >
                        {venueSession.eventSessions.length > 0 ? (
                          <TimelineEventSessionCard
                            eventSession={
                              venueSession.eventSessions[
                                venueSession.eventSessions.length - 1
                              ]
                            }
                          />
                        ) : (
                          <span className="block min-h-[0.5rem]"></span>
                        )}
                      </td>
                    ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
