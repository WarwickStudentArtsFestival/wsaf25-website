import { fetchEvent } from '@/lib/events';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!slug) {
    return new Response('Event slug is required', { status: 422 });
  }

  const event = await fetchEvent(slug);
  if (!event) {
    return new Response('Event not found', { status: 404 });
  }

  return Response.json(event);
}
