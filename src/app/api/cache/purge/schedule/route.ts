import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// Purge cache for any pages which use schedule.json
async function handle(): Promise<NextResponse> {
  revalidateTag('pretalx-schedule');
  revalidatePath('/events');
  revalidatePath('/events/[slug]', 'page');
  revalidatePath('/venues');
  revalidatePath('/venues/[slug]', 'page');

  console.log('Purging cache for /events and /venues pages');

  return NextResponse.json({
    success: true,
    message: 'Cache purged for /events and /venues pages',
  });
}

export async function GET() {
  return handle();
}

export async function POST() {
  return handle();
}

export async function DELETE() {
  return handle();
}
