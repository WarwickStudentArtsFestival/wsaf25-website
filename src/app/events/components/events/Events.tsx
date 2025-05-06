'use client';

import React, { useState, useEffect } from 'react';
import TalkList from './TalkList';
import FilterPanel from '../FilterPanel';
import { Talk } from '../../lib/types';

interface EventsProps {
  allTalks: Talk[];
  initialTracks: string[];
}

export default function Events({ allTalks, initialTracks }: EventsProps) {
  const [selectedTracks, setSelectedTracks] = useState<string[]>(initialTracks);
  const [filteredTalks, setFilteredTalks] = useState<Talk[]>(allTalks);

  useEffect(() => {
    setFilteredTalks(
      allTalks.filter((talk) => {
        return selectedTracks.some((track) => talk.track.en.includes(track));
      }),
    );
  }, [allTalks, selectedTracks]);

  const handleTrackFilterChange = (tracks: string[]) => {
    setSelectedTracks(tracks);
  };

  return (
    <div className="flex flex-row px-4">
      <div className="w-1/6 hidden lg:block">
        <FilterPanel
          talks={allTalks}
          filteredTalks={filteredTalks}
          selectedTracks={selectedTracks}
          onTrackFilterChange={handleTrackFilterChange}
        />
      </div>
      <div className="flex-1">
        <TalkList talks={filteredTalks} />
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredTalks.length} of {allTalks.length} events
        </div>
      </div>
    </div>
  );
}
