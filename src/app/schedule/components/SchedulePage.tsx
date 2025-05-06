'use client';

import React, { useState } from 'react';
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

  return <Schedule initialTalks={talks} />;
}

interface ScheduleProps {
  initialTalks: Talk[];
}

export default function Schedule({ initialTalks }: ScheduleProps) {
  const [talks] = useState<Talk[]>(initialTalks);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([
    'MTW Stagefest',
  ]);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  const filteredTalks = talks.filter((talk) => {
    const trackMatch =
      selectedTracks.length === 0 || selectedTracks.includes(talk.track.en);
    const roomMatch =
      selectedRooms.length === 0 ||
      (talk.slot?.room?.en && selectedRooms.includes(talk.slot.room.en));

    return trackMatch && roomMatch;
  });

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
        </div>
      </div>
    </main>
  );
}
