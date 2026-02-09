import React, { useMemo } from 'react';
import { EventSession, EventWithSessions } from '@/lib/events';
import EventCard from '@/app/events/[slug]/components/event-card';
import { FloatingOverlay } from '@floating-ui/react';

export default function EventPopup({
  selectedEventSlug,
  eventSessions,
  onClose,
}: {
  selectedEventSlug: string;
  eventSessions: EventSession[];
  onClose: () => void;
}) {
  const eventData = useMemo<EventWithSessions | null>(() => {
    const sessions = eventSessions.filter((s) => s.event.slug === selectedEventSlug);
    if (sessions.length === 0) return null;

    const firstSession = sessions[0];
    return {
      ...firstSession.event,
      sessions,
    };
  }, [selectedEventSlug, eventSessions]);

  return (
    <>
      <FloatingOverlay onClick={onClose} lockScroll />
      <div
        className="bg-black/20 fixed left-0 right-0 top-0 bottom-0 z-20 flex items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-md max-w-full min-h-80 max-h-[calc(100vh-8rem)] overflow-y-auto cursor-default flex flex-col mx-2 mt-12"
          onClick={(e) => e.stopPropagation()}
        >
          {eventData ? (
            <EventCard event={eventData} onClose={onClose} />
          ) : (
            <div className="w-3xl max-w-full p-6 text-lg flex flex-col gap-2 justify-center items-center grow mb-8">
              Could not find event
              <button
                className="block cursor-pointer hover:scale-105 border border-gray-200 px-8 py-2 shadow-lg rounded-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
