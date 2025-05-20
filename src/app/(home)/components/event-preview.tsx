import HighlightedHeading from '@/app/components/highlighted-heading';
import ErrorMessage from '@/app/components/ErrorMessage';
import { fetchEventSessions } from '@/lib/events';
import EventSessionCard from '@/app/events/components/event-sessions-list/event-session-card';

export default async function KeyDates() {
  let eventSessions;
  try {
    eventSessions = await fetchEventSessions();
  } catch (error) {
    console.error('Error fetching talks from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  return (
    <main className="w-full overflow-hidden">
      <section className="bg-teal text-white pt-8">
        <HighlightedHeading text="Whats on at WSAF?" />
        <h2 className="text-white text-2xl font-semibold pb-4">
          Event Preview
        </h2>
      </section>
      <div className="bg-teal pb-8 overflow-hidden relative">
        <div
          className="flex gap-4 animate-marquee whitespace-nowrap"
          style={{
            animationDuration: '60s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {[...eventSessions.slice(0, 10), ...eventSessions.slice(0, 10)].map(
            (eventSession, index) => (
              <div
                key={`${eventSession.id}-${index}`}
                className="inline-block min-w-[300px] max-w-[300px]"
              >
                <EventSessionCard eventSession={eventSession} />
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
