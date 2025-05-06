'use client';

import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { fetchSchedule } from '../lib/fetchSchedule';
import ErrorMessage from './ErrorMessage';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../../components/highlighted-heading';
import TalkList from './TalkList';
import SummaryStatistics from './SummaryStatistics';
import { Talk } from '../lib/types';

export const metadata: Metadata = {
  title: 'WSAF Schedule',
};

export async function ScheduleData() {
  const talks = await fetchSchedule();

  if (talks === 'API_ERROR') {
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }
  const allTracks = Array.from(new Set(talks.map((talk) => talk.track.en)));
  return <Schedule initialTalks={talks} initialTracks={allTracks} />;
}

interface ScheduleProps {
  initialTalks: Talk[];
  initialTracks: string[];
}

export default function Schedule({
  initialTalks,
  initialTracks,
}: ScheduleProps) {
  const [talks] = useState<Talk[]>(initialTalks);
  const [selectedTracks, setSelectedTracks] = useState<string[]>(initialTracks);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [filteredTalks, setFilteredTalks] = useState<Talk[]>(initialTalks);

  useEffect(() => {
    const newFilteredTalks = talks.filter((talk) => {
      const trackMatch =
        selectedTracks.length === 0 || selectedTracks.includes(talk.track.en);
      const roomMatch =
        selectedRooms.length === 0 ||
        (talk.slot?.room?.en && selectedRooms.includes(talk.slot.room.en));

      return trackMatch && roomMatch;
    });
    setFilteredTalks(newFilteredTalks);
  }, [talks, selectedTracks, selectedRooms]);

  const handleTrackFilterChange = (tracks: string[]) => {
    setSelectedTracks(tracks);
  };

  const handleRoomFilterChange = (rooms: string[]) => {
    setSelectedRooms(rooms);
  };

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Schedule" />
      <p>{selectedTracks}</p>
      <h1 className="text-teal text-2xl font-semibold mb-2">WSAF Schedule</h1>
      <div className="flex flex-row px-4">
        <div className="w-1/6">
          <SummaryStatistics
            talks={talks}
            selectedTracks={selectedTracks}
            selectedRooms={selectedRooms}
            onTrackFilterChange={handleTrackFilterChange}
            onRoomFilterChange={handleRoomFilterChange}
          />
        </div>
        <div className="flex-1">
          <TalkList talks={filteredTalks} />
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredTalks.length} of {talks.length} events
          </div>
        </div>
      </div>
    </main>
  );
}
