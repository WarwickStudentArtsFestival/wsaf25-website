import { eventDateTimeIntervals } from '@/lib/dates';
import { EventSession } from '@/lib/events';
import { EventSessionGroup } from '@/app/events/components/event-sessions-list/event-sessions-filters';

export type TimelineData = {
  venues: string[];
  times: TimelineDataTime[];
};

export type TimelineDataTime = {
  // Type of time: 'keytime' is shown as a label,
  // 'session' is for additional custom times when sessions start/end
  // 'day' is a special type for the start of a day
  type: 'keytime' | 'session' | 'day';
  startTime: number;
  startTimeSpan?: number;
  venueSessions: TimelineDataTimeVenueSession[];
};

export type TimelineDataTimeVenueSession = {
  rowSpan: number;
  eventStart?: boolean;
  eventSessions: EventSession[];
};

export default function constructTimelineData(
  sessionGroups: EventSessionGroup[],
  venueInfo: Record<string, { order: number; name: string; slug: string }>,
) {
  if (sessionGroups.length === 0) {
    return { venues: [], times: [] };
  }

  // Filter out sessions that are in the art gallery
  const sessions = sessionGroups[0].sessions.filter(
    (session) => !session.event.artGallery,
  );

  const eventDateTimeIntervalTimes = eventDateTimeIntervals.all.map(
    (interval) => interval.date,
  );

  // Get each time that is needed (i.e. whenever an event session starts or ends)
  // Also get a list of each venue
  const timesSet = new Set<number>(eventDateTimeIntervalTimes);
  const venuesSet = new Set<string>();
  for (const event of sessions) {
    if (event.start && event.end) {
      timesSet.add(event.start.getTime());
      timesSet.add(event.end.getTime());
      venuesSet.add(event.venueName);
    }
  }

  // Sort venues somehow
  const venues = Array.from(venuesSet).sort(
    (a, b) => (venueInfo[a]?.order || 0) - (venueInfo[b]?.order || 0),
  );

  let timelineTimes: TimelineDataTime[] = Array.from(timesSet).map((time) => ({
    type: time % 3600000 === 0 ? 'keytime' : 'session', // Show label every hour
    startTime: time,
    venueSessions: venues.map(() => ({ rowSpan: 1, eventSessions: [] })),
  }));

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

  // This will be sorted by start time
  let inProgressSessions: { endTime: number; session: EventSession }[] = [];

  let nextSessionIndex = 0;
  for (const timelineTime of timelineTimes) {
    // Remove any in-progress sessions that have now ended
    inProgressSessions = inProgressSessions.filter(
      (session) => session.endTime > timelineTime.startTime,
    );

    // Add any new sessions that start at this time
    while (nextSessionIndex < sessions.length) {
      const nextSession = sessions[nextSessionIndex];
      if (
        nextSession.start &&
        nextSession.end &&
        nextSession.start.getTime() <= timelineTime.startTime
      ) {
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
}
