import React from 'react';
import { Talk } from '../lib/types';
import FilterSection from './FilterSection';

type FilterPanelProps = {
  talks: Talk[];
  filteredTalks: Talk[];
  selectedTracks: string[];
  // selectedRooms: string[];
  onTrackFilterChange: (tracks: string[]) => void;
  // onRoomFilterChange: (rooms: string[]) => void;
};

const getFrequency = <T extends string>(items: T[]): Record<T, number> => {
  return items.reduce(
    (acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {} as Record<T, number>,
  );
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  talks,
  filteredTalks,
  selectedTracks,
  // selectedRooms,
  onTrackFilterChange,
  // onRoomFilterChange,
}) => {
  const trackFreq = getFrequency(talks.map((t) => t.track.en));
  // const roomFreq = getFrequency(
  //   talks.filter((t) => t.slot?.room?.en).map((t) => t.slot!.room!.en),
  // );

  const trackItems = Object.entries(trackFreq).sort((a, b) => b[1] - a[1]);
  // const roomItems = Object.entries(roomFreq).sort((a, b) => b[1] - a[1]);

  return (
    <div className="sticky top-20 border p-4 text-left text-black border-slate-300 rounded-md overflow-auto max-h-screen shadow-lg">
      <h3 className="font-bold mb-4 text-lg border-b pb-2">Filters</h3>

      <FilterSection
        label="Event Type"
        items={trackItems}
        selectedItems={selectedTracks}
        onChange={onTrackFilterChange}
        showIcons={true}
      />

      {/* DOES NOT REALLY WORK */}
      {/* <FilterSection
        label="Rooms"
        items={roomItems}
        selectedItems={selectedRooms}
        onChange={onRoomFilterChange}
      /> */}

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredTalks.length} of {talks.length} events
      </div>
    </div>
  );
};

export default FilterPanel;
