import { cache } from 'react';

export const fetchFromPretalx = cache(async function fetchFromPretalx<Response>(
  path: string,
): Promise<Response> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    console.error('Missing Pretalx API token');
    throw new Error('missing_pretalx_api_token');
  }

  const baseUrl =
    process.env.PRETALX_API_URL ||
    'https://pretalx.wsaf.org.uk/api/events/2025';

  try {
    const res = await fetch(`${baseUrl}/${path}`, {
      headers: {
        Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
        Accept: 'application/json',
      },
      next: { revalidate: 3600 },
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
