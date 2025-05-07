import 'server-only';

import { Talk } from './types';

export async function fetchTalks(): Promise<Talk[] | 'API_ERROR'> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    console.error('Missing Pretalx API token');
    return 'API_ERROR';
  }

  const allTalks: Talk[] = [];
  const seen = new Set<string>();
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
      console.error(
        'Failed to fetch Pretalx submissions data:',
        await res.text(),
      );
      return 'API_ERROR';
    }

    const data = await res.json();

    for (const talk of data.results) {
      const id = talk.code || talk.id;
      if (!seen.has(id)) {
        seen.add(id);
        allTalks.push(talk);
      }
    }

    nextPageUrl = data.next || null;
  }

  return allTalks;
}
