'use client';

import React, { useState, Suspense, useEffect } from 'react';
import TalkList from './TalkList';
import FilterPanel from '../FilterPanel';
import { Talk, trackTypes } from '@/app/lib/types';
import { useSearchParams } from 'next/navigation';

interface EventsProps {
  allTalks: Talk[];
}

export default function Events({ allTalks }: EventsProps) {
  const [selectedTracks, setSelectedTracks] = useState<string[]>(trackTypes);
  const [filteredTalks, setFilteredTalks] = useState<Talk[]>(allTalks);
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlTracks = searchParams.get('genre');
    if (urlTracks) {
      const trackBitmask = parseInt(urlTracks, 10);
      const tracksFromUrl = trackTypes.filter(
        (track, index) => (trackBitmask & (1 << index)) !== 0,
      );
      if (JSON.stringify(tracksFromUrl) !== JSON.stringify(selectedTracks)) {
        setSelectedTracks(tracksFromUrl);
      }
    }
  }, []);

  useEffect(() => {
    setFilteredTalks(
      allTalks.filter((talk) => {
        return selectedTracks.some((track) => talk.track.en.includes(track));
      }),
    );
  }, [allTalks, selectedTracks]);

  useEffect(() => {
    const bitmask = selectedTracks.reduce((mask, track) => {
      const index = trackTypes.indexOf(track);
      return mask | (1 << index);
    }, 0);
    const params = new URLSearchParams();
    params.set('genre', bitmask.toString());
    window.history.replaceState(null, '', `?${params.toString()}`);
  }, [selectedTracks]);

  const handleTrackFilterChange = (tracks: string[]) => {
    setSelectedTracks(tracks);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-sm text-gray-500">
          Showing {filteredTalks.length} of {allTalks.length} events
        </div>
      </div>
    </Suspense>
  );
}
