import 'server-only';
import { Talk } from './types';
import { cache } from 'react';

export const fetchTalks = cache(async (): Promise<Talk[] | 'API_ERROR'> => {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    console.error('Missing Pretalx API token');
    return 'API_ERROR';
  }

  const allTalks: Talk[] = [];
  const seen = new Set<string>();
  let nextPageUrl = 'https://pretalx.wsaf.org.uk/api/events/2025/talks';
  try {
    while (nextPageUrl) {
      const res = await fetch(nextPageUrl, {
        headers: {
          Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
          Accept: 'application/json',
        },
        next: { revalidate: 3600 },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Failed to fetch Pretalx submissions data:', errorText);
        return 'API_ERROR';
      }

      const data = await res.json();

      for (const talk of data.results) {
        if (!seen.has(talk.code)) {
          seen.add(talk.code);
          allTalks.push(talk);
        }
      }
      nextPageUrl = data.next || null;
    }

    return allTalks;
  } catch (error) {
    console.error('Error fetching talks:', error);
    return 'API_ERROR';
  }
});
