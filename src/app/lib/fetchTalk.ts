import { Talk } from '@/app/lib/types';

export async function fetchTalk(talkSlug: string): Promise<Talk | 'API_ERROR'> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    return 'API_ERROR';
  }

  const url = `https://pretalx.wsaf.org.uk/api/events/2025/talks/${talkSlug}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch event data:', talkSlug, await res.text());
    return 'API_ERROR';
  }

  const data: Talk = await res.json();
  return data;
}
