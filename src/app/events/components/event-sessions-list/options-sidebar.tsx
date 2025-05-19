'use client';
import React from 'react';
import { EventSessionsListContext } from '@/app/events/components/events-list/event-sessions-list-context';
import FilterOptions from '@/app/events/components/events-list/filter-options';

export default function OptionsSidebar({
  context,
  filteredCount,
  totalCount,
}: {
  context: EventSessionsListContext;
  filteredCount: number;
  totalCount: number;
}) {
  return (
    <div className="sticky z-50 top-20 border p-4 text-left text-black border-slate-300 rounded-md overflow-auto max-h-screen shadow-lg">
      <div className="border-b flex gap-2 items-center justify-between pb-2">
        <h3 className="font-bold text-lg">Filters</h3>
        <div className="text-sm text-gray-500 text-right">
          Showing {filteredCount} of {totalCount} events
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="font-semibold mb-1">Search</h4>
          <input
            type="text"
            placeholder="Search by title or speaker"
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <h4 className="font-semibold">Time</h4>
          <div>From to</div>
        </div>

        <FilterOptions
          label="Venue"
          options={context.categories}
          selectedOptions={[]}
          onChange={() => {}}
        />
        <FilterOptions
          label="Venue"
          options={context.venues}
          selectedOptions={[]}
          onChange={() => {}}
        />
        <FilterOptions
          label="Duration"
          options={context.durations}
          selectedOptions={[]}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
