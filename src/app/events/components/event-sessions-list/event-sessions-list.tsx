'use client';
import React, { useMemo } from 'react';
import TalkList from './TalkList';
import OptionsSidebar from './options-sidebar';
import { Talk, trackTypes } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import GoToAllEvents from './GoToAllEvents';
import TrackIcon from '@/app/components/track/TrackIcon';
import TimeSelection from '@/app/events/components/events-list/time-selection';
import { EventSession } from '@/lib/events';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';

export default function EventSessionsList({
  eventSessions,
  context,
}: {
  eventSessions: EventSession[];
  context: EventSessionsListContext;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlTracks = searchParams.get('genre');

  // Get selected tracks based on URL parameters
  const selectedTracks = useMemo(() => {
    return urlTracks
      ? trackTypes.filter(
          (_, index) => (parseInt(urlTracks, 10) & (1 << index)) !== 0,
        )
      : trackTypes;
  }, [urlTracks]);

  // Filter, sort, and group talks
  const { talksByDay, unscheduledTalks, talksFilteredByTrack } = useMemo(() => {
    // Filter talks based on selected tracks, or return all talks if no filters are selected
    let talksFilteredByTrack = allTalks.filter((talk) =>
      selectedTracks.some((track) => talk.track.en.includes(track)),
    );
    talksFilteredByTrack =
      talksFilteredByTrack.length > 0 ? talksFilteredByTrack : allTalks;
    const talksByDay: Record<string, Talk[]> = {};
    const unscheduledTalks: Talk[] = [];
    talksFilteredByTrack.forEach((talk) => {
      if (talk.slot?.start) {
        const day = new Date(talk.slot.start).toISOString().split('T')[0];
        talksByDay[day] = talksByDay[day] || [];
        talksByDay[day].push(talk);
      } else {
        unscheduledTalks.push(talk);
      }
    });

    return {
      talksByDay,
      unscheduledTalks,
      talksFilteredByTrack,
    };
  }, [allTalks, selectedTracks]);

  const sortedDays = useMemo(
    () => Object.keys(talksByDay).sort(),
    [talksByDay],
  );

  const handleTrackFilterChange = (tracks: string[]) => {
    const bitmask = tracks.reduce(
      (mask, track) => mask | (1 << trackTypes.indexOf(track)),
      0,
    );
    const params = new URLSearchParams(searchParams.toString());
    params.set('genre', bitmask.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const isFiltered = allTalks.length !== talksFilteredByTrack.length;
  const genreText = selectedTracks.length === 1 ? selectedTracks[0] : null;

  const filteredEventSessions = useMemo(() => {
    return eventSessions;
  }, [eventSessions]);

  return (
    <>
      {genreText && (
        <div className="sticky top-15 mx-auto flex items-center z-40 pt-4 justify-center bg-white w-full px-4 md:px-8">
          <div className="bg-purple-200 p-2 h-fit text-purple-800 border border-purple-800 rounded-full">
            <TrackIcon track={genreText} size={25} />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl md:text-4xl font-bold text-teal">
              {genreText}
            </h1>
            <h3 className="text-teal font-semibold italic">at WSAF 2025...</h3>
          </div>
        </div>
      )}

      <TimeSelection />

      <div className="flex flex-row px-2 sm:px-4 relative">
        <aside className="w-1/6 hidden lg:block">
          <OptionsSidebar
            filteredCount={filteredEventSessions.length}
            totalCount={eventSessions.length}
            context={context}
          />
        </aside>

        <main className="flex-1 mb-16 space-y-8">
          <TalkList talks={} />

          {filteredEventSessions.length !== eventSessions.length && (
            <div className="mt-8 flex justify-center">
              <GoToAllEvents />
            </div>
          )}
        </main>

        <footer className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredEventSessions.length} of {eventSessions.length}{' '}
          events
        </footer>
      </div>
    </>
  );
}
