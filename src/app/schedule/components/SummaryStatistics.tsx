'use client';

import React from 'react';
import { Talk } from '../lib/types';
import TrackIcon from './TrackIcon';

type SummaryStatsProps = {
  talks: Talk[];
  selectedTracks: string[];
  selectedRooms: string[];
  onTrackFilterChange: (tracks: string[]) => void;
  onRoomFilterChange: (rooms: string[]) => void;
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

const FilterSection = ({
  label,
  items,
  selectedItems,
  onChange,
  showIcons = false,
}: {
  label: string;
  items: [string, number][];
  selectedItems: string[];
  onChange: (items: string[]) => void;
  showIcons?: boolean;
}) => {
  const handleItemToggle = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    onChange(newSelectedItems);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      onChange([]);
    } else {
      onChange(items.map(([item]) => item));
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{label}:</span>
        <button
          type="button"
          onClick={handleSelectAll}
          className="text-xs text-blue-600 hover:underline"
        >
          {selectedItems.length === items.length
            ? 'Deselect All'
            : 'Select All'}
        </button>
      </div>
      <ul className="space-y-1">
        {items.map(([key, count]) => (
          <li key={key} className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                checked={selectedItems.includes(key)}
                onChange={() => handleItemToggle(key)}
                className="mr-2 h-4 w-4"
              />
              <div className="flex items-center gap-2 flex-1">
                {showIcons && <TrackIcon size={15} track={key} />}
                <span className="text-sm">{key || '(None)'}</span>
                <span className="text-xs text-gray-500 ml-auto">({count})</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SummaryStatistics: React.FC<SummaryStatsProps> = ({
  talks,
  selectedTracks,
  selectedRooms,
  onTrackFilterChange,
  onRoomFilterChange,
}) => {
  const trackFreq = getFrequency(talks.map((t) => t.track.en));
  const roomFreq = getFrequency(
    talks.filter((t) => t.slot?.room?.en).map((t) => t.slot!.room!.en),
  );

  const trackItems = Object.entries(trackFreq).sort((a, b) => b[1] - a[1]);
  const roomItems = Object.entries(roomFreq).sort((a, b) => b[1] - a[1]);

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

      <FilterSection
        label="Rooms"
        items={roomItems}
        selectedItems={selectedRooms}
        onChange={onRoomFilterChange}
      />

      <div className="mt-4 text-sm text-gray-500">
        Showing {talks.length} total events
      </div>
    </div>
  );
};

export default SummaryStatistics;
