'use client';
import React, { Suspense } from 'react';
import TalkList from './TalkList';
import FilterPanel from '../FilterPanel';
import { Talk, trackTypes } from '@/app/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';
import GoToAllEvents from './GoToAllEvents';
import HighlightedHeading from '@/app/components/highlighted-heading';

interface EventsProps {
  allTalks: Talk[];
}

function EventsClient({ allTalks }: EventsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlTracks = searchParams.get('genre');
  const selectedTracks = urlTracks
    ? trackTypes.filter(
        (_, index) => (parseInt(urlTracks, 10) & (1 << index)) !== 0,
      )
    : [...trackTypes];

  let filteredTalks = allTalks.filter((talk) =>
    selectedTracks.some((track) => talk.track.en.includes(track)),
  );
  if (filteredTalks.length === 0) {
    filteredTalks = allTalks;
  }

  const handleTrackFilterChange = (tracks: string[]) => {
    const bitmask = tracks.reduce((mask, track) => {
      const index = trackTypes.indexOf(track);
      return mask | (1 << index);
    }, 0);

    const params = new URLSearchParams(searchParams.toString());
    params.set('genre', bitmask.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const isFiltered = allTalks.length !== filteredTalks.length;
  const headerText =
    selectedTracks.length === 1 ? `${selectedTracks[0]}` : 'All Events';

  return (
    <>
      <HighlightedHeading text={headerText} />
      <h1 className="text-teal text-2xl font-semibold mb-4">WSAF Events</h1>
      <div className="flex flex-row px-4 relative">
        <div className="w-1/6 hidden lg:block">
          <FilterPanel
            talks={allTalks}
            filteredTalks={filteredTalks}
            selectedTracks={selectedTracks}
            onTrackFilterChange={handleTrackFilterChange}
          />
        </div>
        <div className="flex-1 mb-16">
          <TalkList talks={filteredTalks} />
          {isFiltered && (
            <div className="mt-8 flex justify-center">
              <GoToAllEvents />
            </div>
          )}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredTalks.length} of {allTalks.length} events
        </div>
      </div>
    </>
  );
}

export default function Events({ allTalks }: EventsProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsClient allTalks={allTalks} />
    </Suspense>
  );
}
