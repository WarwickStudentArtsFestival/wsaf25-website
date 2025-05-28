import { cache } from 'react';

export type PretalxScheduleRoom = {
  name: string;
  guid: string;
  description: string;
  capacity: number | null;
};

export type PretalxScheduleTrack = {
  name: string;
  colour: string;
};

export type PretalxScheduleDay = {
  index: number;
  day_start: string;
  day_end: string;
  rooms: Record<string, PretalxScheduleEvent[]>;
};

export type PretalxScheduleEvent = {
  url: string;
  id: number;
  guid: string;
  date: string;
  start: string;
  logo: string;
  duration: string;
  room: string;
  slug: string;
  title: string;
  subtitle: string;
  track: string;
  type: string;
  language: string;
  abstract: string | null;
  description: string;
  do_not_record: boolean;
  answers: PretalxScheduleAnswer[];
};

export type PretalxScheduleAnswer = {
  question: number;
  answer: string;
};

export type PretalxScheduleJson = {
  $schema: string;
  generator: { name: string; version: string };
  schedule: {
    url: string;
    version: string;
    base_url: string;
    conference: {
      acronym: string;
      title: string;
      start: string;
      end: string;
      daysCount: number;
      rooms: PretalxScheduleRoom[];
      tracks: PretalxScheduleTrack[];
      days: PretalxScheduleDay[];
    };
  };
};

export const pretalxHttpRequest = cache(async function pretalxHttpRequest<
  Response,
>(path: string): Promise<Response> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    console.error('Missing Pretalx API token');
    throw new Error('missing_pretalx_api_token');
  }

  try {
    const res = await fetch(`${process.env.PRETALX_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
        Accept: 'application/json',
      },
      next: { revalidate: 3600, tags: ['pretalx-schedule'] },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Failed to fetch data from Pretalx ${path}:`, errorText);
      throw new Error('pretalx_api_error');
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching data from Pretalx ${path}:`, error);
    throw new Error('pretalx_api_error');
  }
});

export const pretalxApiRequest = (path: string): Promise<Response> => {
  return pretalxHttpRequest<Response>(
    `api/events/${process.env.PRETALX_EVENT_SLUG}/${path}`,
  );
};

export const fetchPretalxSchedule = (): Promise<PretalxScheduleJson> => {
  return pretalxHttpRequest<PretalxScheduleJson>(
    `${process.env.PRETALX_EVENT_SLUG}/schedule/export/schedule.json`,
  );
};
