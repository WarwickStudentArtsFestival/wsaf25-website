import React from 'react';
import { EventWithSessions } from '@/lib/events';
import { useQuery } from '@tanstack/react-query';
import EventCard from '@/app/events/[slug]/components/event-card';
import { FloatingOverlay } from '@floating-ui/react';

export default function EventPopup({
  selectedEventSlug,
  onClose,
}: {
  selectedEventSlug: string;
  onClose: () => void;
}) {
  const query = useQuery<EventWithSessions>({
    queryKey: ['event', selectedEventSlug],
    queryFn: async () => {
      const response = await fetch('/api/events/' + selectedEventSlug);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

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
          {query.data ? (
            <EventCard event={query.data} onClose={onClose} />
          ) : query.isLoading ? (
            <div className="w-3xl max-w-full p-6 text-lg flex justify-center items-center grow mb-8">
              Loading event...
            </div>
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
