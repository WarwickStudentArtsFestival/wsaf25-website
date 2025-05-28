import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// Purge cache for any pages which use schedule.json
export async function GET() {
  revalidateTag('pretalx-schedule');
  revalidatePath('/events');
  revalidatePath('/events/[slug]', 'page');
  revalidatePath('/venues');
  revalidatePath('/venues/[slug]', 'page');

  return NextResponse.json({
    success: true,
    message: 'Cache purged for /events and /venues pages',
  });
}
