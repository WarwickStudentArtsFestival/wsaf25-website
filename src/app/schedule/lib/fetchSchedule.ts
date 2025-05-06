import { Talk } from './types';

export async function fetchSchedule(): Promise<Talk[] | 'API_ERROR'> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    return 'API_ERROR';
  }

  let allTalks: Talk[] = [];
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

    allTalks = allTalks.concat(data.results);

    nextPageUrl = data.next || null;
    // nextPageUrl = null;
  }

  return allTalks;
}
