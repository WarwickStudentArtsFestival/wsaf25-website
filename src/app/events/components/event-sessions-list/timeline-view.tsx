import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import React, { useMemo } from 'react';
import { EventSession } from '@/lib/events';
import { eventDateTimeIntervals } from '@/lib/dates';
import TimelineEventSessionCard from '@/app/events/components/event-sessions-list/timeline-event-session-card';
import Link from 'next/link';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

type TimelineData = {
  venues: string[];
  times: TimelineDataTime[];
};

type TimelineDataTime = {
  // Type of time: 'keytime' is shown as a label,
  // 'session' is for additional custom times when sessions start/end
  // 'day' is a special type for the start of a day
  type: 'keytime' | 'session' | 'day';
  startTime: number;
  startTimeSpan?: number;
  venueSessions: TimelineDataTimeVenueSession[];
};

type TimelineDataTimeVenueSession = {
  rowSpan: number;
  eventStart?: boolean;
  eventSessions: EventSession[];
};

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
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: `WSAF Event Sessions Timeline - ${new Date().toISOString()}`,
    pageStyle: `
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');

    body {
      font-family: 'Lexend', sans-serif;
    }

    @page {
      size: A4 landscape; 
      margin: 0; 
    }

    h1, h2, h3, h4, h5, h6 {
      page-break-after: avoid;
      page-break-inside: avoid;
      font-weight: 700; 
      color: #000; 
    }

    .highlighted-heading {
      background-color: #FFBD00 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    table {
      width: 100%; 
      border-collapse: collapse; 
      page-break-inside: auto;
    }

    .timeline-event-session-card {
      page-break-inside: avoid;
      break-inside: avoid; 
    }

    .sticky {
      position: static !important; 
    }

    .w-max {
      width: auto !important; 
    }

    .max-w-full {
      max-width: 100% !important;
    }
    .overflow-x-auto, .overflow-y-auto {
      overflow: visible !important;
    }

    .h-full {
      height: auto !important; 
    }
  `,
  });

  const timeline = useMemo<TimelineData>(() => {
    if (sessionGroups.length === 0) {
      return { venues: [], times: [] };
    }

    const eventDateTimeIntervalTimes = eventDateTimeIntervals.all.map(
      (interval) => interval.date,
    );

    // Get each time that is needed (i.e. whenever an event session starts or ends)
    // Also get a list of each venue
    const timesSet = new Set<number>(eventDateTimeIntervalTimes);
    const venuesSet = new Set<string>();
    for (const event of sessionGroups[0].sessions) {
      timesSet.add(event.start.getTime());
      timesSet.add(event.end.getTime());
      venuesSet.add(event.venueName);
    }

    // Sort venues somehow
    const venues = Array.from(venuesSet).sort(
      (a, b) => (venueInfo[a]?.order || 0) - (venueInfo[b]?.order || 0),
    );

    let timelineTimes: TimelineDataTime[] = Array.from(timesSet).map(
      (time) => ({
        type: time % 3600000 === 0 ? 'keytime' : 'session', // Show label every hour
        startTime: time,
        venueSessions: venues.map(() => ({ rowSpan: 1, eventSessions: [] })),
      }),
    );

    // Add a special 'day' type for the start of each day
    // NOTE - events should not coincide with this otherwise it will probably
    // break stuff
    for (const day of eventDateTimeIntervals.days) {
      timelineTimes.push({
        type: 'day',
        // This is one hour before the first minute interval of the day
        startTime: day.hours[0].minuteIntervals[0].date - 3600000,
        venueSessions: venues.map(() => ({ rowSpan: 1, eventSessions: [] })),
      });
    }

    // Sort the timeline times by start time
    timelineTimes = timelineTimes.sort((a, b) => a.startTime - b.startTime);

    let inProgressSessions: { endTime: number; session: EventSession }[] = [];

    let nextSessionIndex = 0;
    for (const timelineTime of timelineTimes) {
      // Remove any in-progress sessions that have now ended
      inProgressSessions = inProgressSessions.filter(
        (session) => session.endTime > timelineTime.startTime,
      );

      // Add any new sessions that start at this time
      while (nextSessionIndex < sessionGroups[0].sessions.length) {
        const nextSession = sessionGroups[0].sessions[nextSessionIndex];
        if (nextSession.start.getTime() <= timelineTime.startTime) {
          inProgressSessions.push({
            endTime: nextSession.end.getTime(),
            session: nextSession,
          });
          nextSessionIndex++;
        } else {
          break;
        }
      }

      // Add any in-progress sessions
      for (const inProgressSession of inProgressSessions) {
        const venueIndex = venues.indexOf(inProgressSession.session.venueName);
        timelineTime.venueSessions[venueIndex].eventSessions.push(
          inProgressSession.session,
        );
      }
    }

    // Iterate back through the timeline times to set rowSpan
    for (let i = 0; i < venues.length; i++) {
      let firstOccurrenceIndex = 0;
      let occurrenceKey = '';

      for (let j = 0; j < timelineTimes.length; j++) {
        const venueSession = timelineTimes[j].venueSessions[i];

        const currentOccurrenceKey = venueSession.eventSessions
          .map((session) => session.id)
          .join();
        if (currentOccurrenceKey !== occurrenceKey) {
          // The session has changed, so set the rowSpan of the previous fields
          if (occurrenceKey) {
            const rowSpan = j - firstOccurrenceIndex;

            timelineTimes[firstOccurrenceIndex].venueSessions[i].eventStart =
              true;
            if (rowSpan > 1) {
              for (let k = firstOccurrenceIndex; k <= j - 1; k++) {
                timelineTimes[k].venueSessions[i].rowSpan = rowSpan;
              }
            }
          }

          firstOccurrenceIndex = j;
          occurrenceKey = currentOccurrenceKey;
        }
      }
    }

    // Set rowSpan for times
    let lastKeytimeIndex = -1;
    for (let i = 0; i < timelineTimes.length; i++) {
      if (
        timelineTimes[i].type === 'keytime' ||
        timelineTimes[i].type === 'day'
      ) {
        if (lastKeytimeIndex !== -1) {
          const rowSpan = i - lastKeytimeIndex;
          for (let j = lastKeytimeIndex; j < i; j++) {
            timelineTimes[j].startTimeSpan = rowSpan;
          }
        }

        lastKeytimeIndex = i;
      }
    }

    return {
      venues,
      times: timelineTimes,
    };
  }, [sessionGroups, venueInfo]);

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
        // className="border-2 border-slate-300 w-max max-w-full"
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
