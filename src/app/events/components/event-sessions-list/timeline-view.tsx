import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import { useMemo } from 'react';
import { EventSession } from '@/lib/events';
import { eventDateTimeIntervals } from '@/lib/dates';

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
  eventSessions: string[];
};

export default function TimelineView({
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

    const defaultVenueSessions: TimelineDataTimeVenueSession[] = venues.map(
      () => ({ eventSessions: [] }),
    );

    const timelineTimes: TimelineDataTime[] = Array.from(timesSet)
      .sort((a, b) => a - b)
      .map((time) => ({
        keyTime: time % 3600000 === 0, // Show label every hour
        startTime: time,
        venueSessions: venues.map(() => ({ eventSessions: [] })),
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
          inProgressSession.session.event.name,
        );
      }
    }

    return {
      venues,
      times: timelineTimes,
    };
  }, [sessionGroups]);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th className="py-1 px-2">Time</th>
            {timeline.venues.map((venue) => (
              <th key={venue} className="py-1 px-2">
                {venue}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeline.times.map((time, i) => (
            <tr key={i}>
              <th>
                {time.keyTime &&
                  new Date(time.startTime).toLocaleTimeString('en-gb', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })}
              </th>
              {time.venueSessions.map((venueSession, j) => (
                <td key={j}>
                  {venueSession.eventSessions.map((session) => (
                    <span key={session}>{session}</span>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
