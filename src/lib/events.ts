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

  abstract: string;
  description: string;

  image: string;

  dropIn: boolean;
  artistName: string | null;
};

export type Session = {
  id: string;

  start: Date;
  end: Date;
  minutes: number;
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
  const start = new Date(event.date);

  // Convert duration from hours:minutes to minutes
  const splitDuration = event.duration.split(':');
  const minutes = parseInt(splitDuration[1]) + parseInt(splitDuration[0]) * 60;

  const end = new Date(event.date);
  end.setMinutes(end.getMinutes() + minutes);

  const durationCategory = durationCategories.findLast(
    (category) => category.minMinutes <= minutes,
  );

  // Generate ID based on the event ID and day + (hour mod 2).
  // This means that this will BREAK if there is any event with sessions within
  // two hours of each other. But if a session is moved to a different room or
  // shifted by up to an hour, everything else will be persisted.
  const sessionId = `${event.guid}-${start.getUTCDay()}-${start.getUTCHours() % 2}`;

  const dropIn = !!event.answers.find((answer) => answer.question === 11)
    ?.answer;
  const artistName = event.answers.find(
    (answer) => answer.question === 8,
  )?.answer;

  return {
    id: sessionId,

    event: {
      id: event.id,
      name: event.title,
      categoryPretalxTrack: event.track,

      abstract: event.abstract || '',
      description: event.description,

      image: event.logo || '',

      dropIn,
      artistName: artistName || null,
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

  const events = schedule.schedule.conference.days
    // Map over each day
    .flatMap((day: PretalxScheduleDay): EventSession[] =>
      // Map over each room in the day, excluding the "gallery" day
      day.index === "gallery"
        ? []
        :
      Object.values(day.rooms).flatMap((roomEvents) =>
        roomEvents.map(constructEventSessionFromPretalxEvent),
      ),
    );

  return events;
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
