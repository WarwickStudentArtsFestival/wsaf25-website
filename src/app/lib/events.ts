import { fetchFromPretalx } from '@/app/lib/pretalx';

export type Event = {
  id: string;
  name: string;
  category: string;

  abstract: string;
  description: string;

  image: string;

  sessions: EventSession[];
};

export type EventSession = {
  start: string;
  end: string;

  venueId: string;
  venueName: string;
};

type PretalxTalk = {
  code: string;
  speakers: PretalxEventAdmin[];
  title: string;
  submission_type: { en: string };
  track: { en: string };
  state: string;
  description: string;
  slot: { room_id: number; room: { en: string }; start: string; end: string };
  image: string;
  duration: number;
};

export type PretalxEventAdmin = {
  code: string;
  name: string;
};

function constructEventFromPretalxEvent(event: PretalxTalk): Event {
  return {
    id: event.code,
    name: event.title,
    category: event.track.en,

    abstract: event.description,
    description: event.description,

    image: event.image,

    sessions: [
      {
        start: event.slot.start,
        end: event.slot.end,
        venueId: String(event.slot.room_id),
        venueName: event.slot.room.en,
      },
    ],
  };
}

export async function fetchEvents(): Promise<Event[]> {
  const allTalks: Event[] = [];
  const seen = new Set<string>();

  const params = new URLSearchParams({
    limit: '200',
  });
  const res = await fetchFromPretalx<{ results: PretalxTalk[] }>(
    `/submissions?${params.toString()}`,
  );

  for (const talk of res.results) {
    if (!seen.has(talk.code)) {
      seen.add(talk.code);
      allTalks.push(constructEventFromPretalxEvent(talk));
    }
  }

  return allTalks;
}

export async function fetchEventsInVenue(venueName: string): Promise<Event[]> {
  const events = await fetchEvents();
  const filteredEvents = events.filter(
    (t) => t.sessions[0].venueName === venueName,
  );
  return filteredEvents;
}

export function fetchEvent(slug: string) {
  return fetchFromPretalx<Event>(`/talks/${slug}`);
}
