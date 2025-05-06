'use client';

import React, { useState, useEffect } from 'react';
import TalkList from './TalkList';
import FilterPanel from './FilterPanel';
import { Talk } from '../lib/types';

interface ScheduleProps {
  allTalks: Talk[];
  initialTracks: string[];
  // initialRooms: string[];
}

export default function Schedule({
  allTalks,
  initialTracks,
  // initialRooms,
}: ScheduleProps) {
  const [selectedTracks, setSelectedTracks] = useState<string[]>(initialTracks);
  // const [selectedRooms, setSelectedRooms] = useState<string[]>(initialRooms);
  const [filteredTalks, setFilteredTalks] = useState<Talk[]>(allTalks);

  useEffect(() => {
    setFilteredTalks(
      allTalks.filter((talk) => {
        return selectedTracks.some((track) => talk.track.en.includes(track));
        // selectedRooms.some((room) => talk.slot?.room?.en.includes(room))
      }),
    );
  }, [allTalks, selectedTracks]);

  const handleTrackFilterChange = (tracks: string[]) => {
    setSelectedTracks(tracks);
  };

  // const handleRoomFilterChange = (rooms: string[]) => {
  //   setSelectedRooms(rooms);
  // };

  return (
    <div className="flex flex-row px-4">
      <div className="w-1/6">
        <FilterPanel
          talks={allTalks}
          filteredTalks={filteredTalks}
          selectedTracks={selectedTracks}
          // selectedRooms={selectedRooms}
          onTrackFilterChange={handleTrackFilterChange}
          // onRoomFilterChange={handleRoomFilterChange}
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
