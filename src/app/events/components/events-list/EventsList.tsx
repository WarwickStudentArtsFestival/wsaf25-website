'use client';
import React, { Suspense, useMemo } from 'react';
import TalkList from './TalkList';
import FilterPanel from '../FilterPanel';
import { Talk, trackTypes } from '@/app/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';
import GoToAllEvents from './GoToAllEvents';
import HighlightedHeading from '@/app/components/highlighted-heading';
import TrackIcon from '@/app/components/track/TrackIcon';

interface EventsProps {
  allTalks: Talk[];
}

function EventsClient({ allTalks }: EventsProps) {
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

      <div className="flex flex-row px-2 sm:px-4 relative">
        <aside className="w-1/6 hidden lg:block">
          <FilterPanel
            talks={allTalks}
            filteredTalks={talksFilteredByTrack}
            selectedTracks={selectedTracks}
            onTrackFilterChange={handleTrackFilterChange}
          />
        </aside>

        <main className="flex-1 mb-16 space-y-8">
          {sortedDays.map((day) => (
            <section key={day}>
              <HighlightedHeading
                text={new Intl.DateTimeFormat('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(new Date(day))}
              />
              <TalkList talks={talksByDay[day]} />
            </section>
          ))}

          {unscheduledTalks.length > 0 && (
            <section>
              <HighlightedHeading text="Not Scheduled Yet" />
              <TalkList talks={unscheduledTalks} />
            </section>
          )}

          {isFiltered && (
            <div className="mt-8 flex justify-center">
              <GoToAllEvents />
            </div>
          )}
        </main>

        <footer className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {talksFilteredByTrack.length} of {allTalks.length} events
        </footer>
      </div>
    </>
  );
}

export default function EventsList({ allTalks }: EventsProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsClient allTalks={allTalks} />
    </Suspense>
  );
}
