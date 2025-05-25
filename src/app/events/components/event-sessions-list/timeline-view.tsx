import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import { useMemo } from 'react';
import { EventSession } from '@/lib/events';
import { eventDateTimeIntervals } from '@/lib/dates';
import TimelineEventSessionCard from '@/app/events/components/event-sessions-list/timeline-event-session-card';

type TimelineData = {
  venues: string[];
  times: TimelineDataTime[];
};

type TimelineDataTime = {
  keyTime: boolean; // Indicates whether to show this time label
  startTime: number;
  venueSessions: TimelineDataTimeVenueSession[];
};

type TimelineDataTimeVenueSession = {
  rowSpan: number;
  eventStart?: boolean;
  eventSessions: EventSession[];
};

export default function TimelineView({
  filteredSessionCount,
  sessionCount,
  resetFilters,
  sessionGroups,
}: {
  filteredSessionCount: number;
  sessionCount: number;
  resetFilters: () => void;
  sessionGroups: EventSessionGroup[];
}) {
  const timeline = useMemo<TimelineData>(() => {
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
    const venues = Array.from(venuesSet);

    const timelineTimes: TimelineDataTime[] = Array.from(timesSet)
      .sort((a, b) => a - b)
      .map((time) => ({
        keyTime: time % 3600000 === 0, // Show label every hour
        startTime: time,
        venueSessions: venues.map(() => ({ rowSpan: 1, eventSessions: [] })),
      }));

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

    return {
      venues,
      times: timelineTimes,
    };
  }, [sessionGroups]);

  return (
    <main>
      <table className="mt-2 mx-4 mb-12 table-fixed">
        <thead>
          <tr className="text-black">
            <th className="py-1 px-2 w-24">Time</th>
            {timeline.venues.map((venue) => (
              <th key={venue} className="py-1 px-2">
                {venue}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeline.times.map((time, i) => (
            <tr key={i} className={`${time.keyTime ? 'border-t' : ''} h-full`}>
              <th className="text-black text-sm font-semibold">
                <p className="min-h-[0.5rem]">
                  {time.keyTime &&
                    new Date(time.startTime).toLocaleTimeString('en-gb', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })}
                </p>
              </th>
              {time.venueSessions
                .filter(
                  (venueSession) =>
                    venueSession.rowSpan === 1 || venueSession.eventStart,
                )
                .map((venueSession, j) => (
                  <td key={j} rowSpan={venueSession.rowSpan} className="h-full">
                    {venueSession.eventSessions.length > 0 && (
                      <TimelineEventSessionCard
                        eventSession={venueSession.eventSessions[0]}
                      />
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
