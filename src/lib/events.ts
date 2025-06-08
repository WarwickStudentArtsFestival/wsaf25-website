import {
  fetchPretalxSchedule,
  PretalxScheduleDay,
  PretalxScheduleEvent,
} from '@/lib/pretalx';
import { durationCategories } from '@/data/events';
import { ReactNode } from 'react';

export type Event = {
  id: number;
  slug: string;
  name: string;
  categoryPretalxTrack: string;

  shortDescription: string;
  description: string;

  image: string;

  dropIn: boolean;
  artGallery: boolean;

  artist: {
    name?: string;
    description?: string;
    image?: string;
    website?: string;
    instagramHandle?: string;
  };

  sessionCount: number;
};

export type Session = {
  id: string;

  start: Date;
  end: Date;
  minutes: number;
  durationCategory: string;

  venueName: string;

  parent?: EventSession;
  childrenIds?: string[];
};

export type EventSession = Session & {
  event: Event;
};

type EventSessionWithoutSessionCount = Session & {
  event: Omit<Event, 'sessionCount'>;
};

export type EventWithSessions = Event & {
  sessions: Session[];
};

export type EventDurationCategory = {
  slug: string;
  label: string;
  minMinutes: number;
  filterBitFieldIndex: number;
};

export type EventCategory = {
  pretalxTrack: string;
  slug: string;
  label: string;
  icon: ReactNode;
  colour: string;
  filterBitFieldIndex: number;
};

function constructEventSessionFromPretalxEvent(
  event: PretalxScheduleEvent,
  day: PretalxScheduleDay,
): EventSessionWithoutSessionCount {
  let start = null;
  let end = null;
  let minutes: number | null = null;
  let sessionId = event.guid;
  let dropIn = true; // Default to true (i.e. for gallery events)
  let artGallery = false;

  if (!event.date || !event.start || !event.duration) {
    if (day.index !== 'gallery') {
      // If this is the case, we are receiving an invalid schedule.json
      console.error(
        `Invalid event data for event ${event.id} (${event.title}) on day ${day.index}: Missing date, start, or duration.`,
      );
      throw new Error('Invalid event data');
    } else {
      // Gallery event - use start/end of the whole gallery
      start = new Date(day.day_start);
      end = new Date(day.day_end);
      minutes = Math.round(end.getTime() - start.getTime() / 60000); // Convert milliseconds to minutes
      artGallery = true;
    }
  } else {
    // Normal event
    start = new Date(event.date);
    const splitDuration = event.duration.split(':');
    // Convert duration from hours:minutes to minutes
    end = new Date(event.date);
    minutes = parseInt(splitDuration[1]) + parseInt(splitDuration[0]) * 60;
    end.setMinutes(end.getMinutes() + minutes);

    dropIn = !!event.answers.find((answer) => answer.question === 11)?.answer;

    // Generate ID based on the event ID and day + (hour mod 2).
    // This means that this will BREAK if there is any event with sessions within
    // two hours of each other. But if a session is moved to a different room or
    // shifted by up to an hour, everything else will be persisted.
    sessionId = `${event.guid}-${start.getUTCDay()}-${start.getUTCHours() % 2}`;
  }

  const durationCategory = durationCategories.findLast(
    (category) => category.minMinutes <= (minutes as number),
  );

  return {
    id: sessionId,

    event: {
      id: event.id,
      slug: event.code,
      name: event.title,
      categoryPretalxTrack: event.track,

      shortDescription: event.abstract || '',
      description: event.description,

      image: event.logo || '',

      dropIn,
      artGallery,

      artist: {
        name:
          event.answers.find((answer) => answer.question === 8)?.answer || '',
        description:
          event.answers.find((answer) => answer.question === 12)?.answer || '',
        website:
          event.answers.find((answer) => answer.question === 14)?.answer || '',
        instagramHandle:
          event.answers.find((answer) => answer.question === 15)?.answer || '',

        // It seems like this is returning e.g. file://Logo_.... which doesn't work
        // Will probably need to use pretalx API here
        image:
          event.answers.find((answer) => answer.question === 13)?.answer || '',
      },
    },

    start,
    end,
    minutes,
    durationCategory: durationCategory?.slug || '',
    venueName: event.room,
  };
}

/**
 * Add inheritance and event counts to event sessions. NOTE - this modifies the session array in place.
 * @param sessions A reference to the same array, now with inheritance and sorted
 */
function addEventSessionInheritanceAndCounts(
  sessions: EventSessionWithoutSessionCount[],
): EventSession[] {
  const sortedSessions = sessions.sort((a, b) => {
    // Sort first by venue, then by start time
    const venueComparison = a.venueName.localeCompare(b.venueName);
    if (venueComparison !== 0) return venueComparison;

    return a.start.getTime() - b.start.getTime() || 0;
  }) as EventSession[];
  // This casting is slightly unsafe, but as we know that we are adding event
  // counts to every session within this function, it should be fine

  let currentParent: EventSession | null = null;
  let currentVenueName = '';

  const eventCounts: Record<string, number> = {};

  // Get event counts
  for (const session of sortedSessions) {
    eventCounts[session.event.id] = (eventCounts[session.event.id] || 0) + 1;
  }

  for (const session of sortedSessions) {
    session.event.sessionCount = eventCounts[session.event.id] || 0;

    // Skip art gallery
    if (session.event.artGallery) continue;

    // If the venue name has changed, reset the current parent
    if (session.venueName !== currentVenueName) {
      currentVenueName = session.venueName;
      currentParent = null;
    } else {
      if (currentParent) {
        // If the parent overlaps...
        if (session.start.getTime() < currentParent.end.getTime()) {
          // If the current session starts at the same time as the parent and
          // has a longer duration, it becomes the new parent
          if (
            session.start.getTime() == currentParent.start.getTime() &&
            session.minutes > currentParent.minutes
          ) {
            currentParent.parent = session;
            session.childrenIds = session.childrenIds
              ? [...session.childrenIds, currentParent.id]
              : [currentParent.id];
            currentParent = session;
          } else if(session.end.getTime() > currentParent.end.getTime()) {
            currentParent = session;
          } else {
            // Add the current session as a child of the parent
            session.parent = currentParent;
            if (!currentParent.childrenIds) {
              currentParent.childrenIds = [session.id];
            } else {
              currentParent.childrenIds.push(session.id);
            }
          }
        } else {
          currentParent = session;
        }
      } else {
        currentParent = session;
      }
    }
  }

  return sortedSessions;
}

export async function fetchEventSessions(): Promise<EventSession[]> {
  const schedule = await fetchPretalxSchedule();

  const eventSessions = schedule.schedule.conference.days
    // Map over each day
    .flatMap((day: PretalxScheduleDay) =>
      Object.values(day.rooms).flatMap(
        (roomEvents): EventSessionWithoutSessionCount[] =>
          roomEvents.map((event) =>
            constructEventSessionFromPretalxEvent(event, day),
          ),
      ),
    );

  return addEventSessionInheritanceAndCounts(eventSessions);
}

export async function fetchEventSessionsInVenue(
  venueName: string,
): Promise<EventSession[]> {
  const events = await fetchEventSessions();
  return events.filter((event) => event.venueName === venueName);
}

export async function fetchEvent(
  slug: number | string,
): Promise<EventWithSessions | null> {
  const eventsSessions = await fetchEventSessions();
  const eventSessions = eventsSessions.filter(
    (session) => session.event.id === slug || session.event.slug === slug,
  );
  if (eventSessions.length === 0) return null;

  return {
    ...eventSessions[0].event,
    sessions: eventSessions.map((session) => ({ ...session, event: null })),
  };
}
