import {
  fetchPretalxSchedule,
  PretalxScheduleDay,
  PretalxScheduleEvent,
} from '@/lib/pretalx';
import { durationCategories } from '@/data/events';
import { ReactNode } from 'react';

export type Event = {
  id: number;
  name: string;
  categoryPretalxTrack: string;

  shortDescription: string;
  description: string;

  image: string;

  dropIn: boolean;

  artist: {
    name?: string;
    description?: string;
    image?: string;
    website?: string;
    instagramHandle?: string;
  };
};

export type Session = {
  id: string;

  start: Date | null;
  end: Date | null;
  minutes: number | null;
  durationCategory: string;

  venueName: string;
};

export type EventSession = Session & {
  event: Event;
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
): EventSession {
  let start = null;
  let end = null;
  let minutes: number | null = null;
  let durationCategory = null;
  let sessionId = event.guid;

  if (event.date) {
    start = new Date(event.date);
    const splitDuration = event.duration.split(':');
    // Convert duration from hours:minutes to minutes
    end = new Date(event.date);
    minutes = parseInt(splitDuration[1]) + parseInt(splitDuration[0]) * 60;
    end.setMinutes(end.getMinutes() + minutes);
    durationCategory = durationCategories.findLast(
      (category) => category.minMinutes <= (minutes as number),
    );
    // Generate ID based on the event ID and day + (hour mod 2).
    // This means that this will BREAK if there is any event with sessions within
    // two hours of each other. But if a session is moved to a different room or
    // shifted by up to an hour, everything else will be persisted.
    sessionId = `${event.guid}-${start.getUTCDay()}-${start.getUTCHours() % 2}`;
  }

  const dropIn = !!event.answers.find((answer) => answer.question === 11)
    ?.answer;

  return {
    id: sessionId,

    event: {
      id: event.id,
      name: event.title,
      categoryPretalxTrack: event.track,

      shortDescription: event.abstract || '',
      description: event.description,

      image: event.logo || '',

      dropIn,

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
        // image: event.speakers[0]?.avatar || '',
        // website: event.speakers[0]?.links?.find((link) => link.type === 'website')?.url || '',
        // instagramHandle: event.answers.find((answer) => answer.question === 10)?.answer || '',
      },
    },

    start,
    end,
    minutes,
    durationCategory: durationCategory?.slug || '',
    venueName: event.room,
  };
}

export async function fetchEventSessions(): Promise<EventSession[]> {
  const schedule = await fetchPretalxSchedule();
  return (
    schedule.schedule.conference.days
      // Map over each day
      .flatMap((day: PretalxScheduleDay): EventSession[] =>
        // Map over each room in the day, excluding the "gallery" day
        Object.values(day.rooms).flatMap((roomEvents) =>
          roomEvents.map(constructEventSessionFromPretalxEvent),
        ),
      )
  );
}

export async function fetchEventSessionsInVenue(
  venueName: string,
): Promise<EventSession[]> {
  const events = await fetchEventSessions();
  return events.filter((event) => event.venueName === venueName);
}

export async function fetchEvent(
  slug: number,
): Promise<EventWithSessions | null> {
  const eventsSessions = await fetchEventSessions();
  const eventSessions = eventsSessions.filter(
    (session) => session.event.id == slug,
  );
  if (eventSessions.length === 0) return null;

  return {
    ...eventSessions[0].event,
    sessions: eventSessions.map((session) => ({ ...session, event: null })),
  };
}
