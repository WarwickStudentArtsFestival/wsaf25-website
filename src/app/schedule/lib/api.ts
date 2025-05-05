import { Event } from './types';

export async function fetchSchedule(): Promise<Event[] | 'API_ERROR'> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    return 'API_ERROR';
  }

  let allTalks: Event[] = [];
  let nextPageUrl = 'https://pretalx.wsaf.org.uk/api/events/2025/submissions';

  while (nextPageUrl) {
    const res = await fetch(nextPageUrl, {
      headers: {
        Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch Pretalx data:', await res.text());
      return 'API_ERROR';
    }

    const data = await res.json();

    allTalks = allTalks.concat(
      data.results.map((submission: any) => ({
        title:
          typeof submission.title === 'string'
            ? submission.title
            : submission.title.en,
        slug: submission.code,
        description:
          typeof submission.description === 'string'
            ? submission.description
            : (submission.description?.en ?? ''),
        start: submission.slot?.start || '',
        end: submission.slot?.end || '',
        state: submission.state,
        speakers: (submission.speakers || []).map((s: any) => ({
          name: typeof s.name === 'string' ? s.name : (s.name?.en ?? ''),
          code: s.code,
          biography:
            typeof s.biography === 'string'
              ? s.biography
              : (s.biography?.en ?? ''),
        })),
        duration: submission.duration || null,
        room:
          typeof submission.slot?.room === 'string'
            ? submission.slot?.room
            : (submission.slot?.room?.en ?? ''),
        tags: Array.isArray(submission.tags)
          ? submission.tags.map((tag: any) =>
              typeof tag === 'string' ? tag : (tag?.en ?? ''),
            )
          : [],
      })),
    );

    nextPageUrl = data.next || null;
  }

  return allTalks;
}
