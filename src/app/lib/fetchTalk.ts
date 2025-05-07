import { Talk } from '@/app/lib/types';
import { cache } from 'react';

const fetchTalkData = async (talkSlug: string): Promise<Talk | 'API_ERROR'> => {
  const url = `https://pretalx.wsaf.org.uk/api/events/2025/talks/${talkSlug}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
      Accept: 'application/json',
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Failed to fetch event data:', talkSlug, errorText);
    return 'API_ERROR';
  }

  return res.json();
};

export const fetchTalk = cache(
  async (talkSlug: string): Promise<Talk | 'API_ERROR'> => {
    if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
      console.error('Missing Pretalx API token');
      return 'API_ERROR';
    }

    try {
      return await fetchTalkData(talkSlug);
    } catch (error) {
      console.error('Error fetching talk data:', error);
      return 'API_ERROR';
    }
  },
);
