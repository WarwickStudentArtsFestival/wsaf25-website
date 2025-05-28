'use client';
import React from 'react';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import FilterOptions from '@/app/events/components/event-sessions-list/filter-options';
import {
  FilterOption,
  SelectedFilters,
  SelectedFilterValues,
} from '@/app/events/components/event-sessions-list/event-sessions-filters';
import SortOptions from '@/app/events/components/event-sessions-list/sort-options';
import TimeOptions from '@/app/events/components/event-sessions-list/time-options';
import { eventDateTimeIntervals } from '@/lib/dates';
import ViewOptions from '@/app/events/components/event-sessions-list/view-options';

export default function OptionsSidebar({
  context,
  filteredCount,
  totalCount,
  selectedFilters,
  selectedFilterValues,
  setFilter,
  handleReset,
  disableVenues,
}: {
  context: EventSessionsListContext;
  filteredCount: number;
  totalCount: number;
  selectedFilters: SelectedFilters;
  selectedFilterValues: SelectedFilterValues;
  setFilter: (value: Partial<SelectedFilters>) => void;
  handleReset: () => void;
  disableVenues?: boolean;
}) {
  const hasFilters =
    selectedFilters.dateFrom !== 0 ||
    selectedFilters.dateTo !== eventDateTimeIntervals.all.length - 1 ||
    selectedFilters.category ||
    selectedFilters.venue ||
    selectedFilters.duration ||
    selectedFilters.dropInOnly;

  return (
    <div className="p-4 pt-0 text-left max-h-[calc(100vh-10rem)] text-black overflow-auto">
      <div className="border-b flex gap-2 items-center pb-2 pt-4 sticky top-0 bg-white z-60">
        <h3 className="font-bold text-lg">Filters</h3>
        {hasFilters && (
          <button
            type="button"
            className="text-xs text-blue-600 hover:underline cursor-pointer"
            onClick={handleReset}
          >
            Clear
          </button>
        )}
        <div className="text-sm text-gray-500 text-right ml-auto">
          Showing {filteredCount} of {totalCount} events
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <ViewOptions
          selectedView={selectedFilters.view}
          setView={(value) => setFilter({ view: value })}
        />

        {selectedFilters.view === 'list' && (
          <SortOptions
            selectedSort={selectedFilters.sort}
            setSort={(value) =>
              setFilter({ sort: value as 'random' | 'time' | 'venue' })
            }
            randomiseSessions={() =>
              setFilter({ randomSeed: new Date().getTime() })
            }
            disableVenues={disableVenues}
          />
        )}

        {selectedFilters.view === 'list' && (
          <div>
            <h4 className="font-semibold mb-1">Search</h4>
            <input
              type="text"
              placeholder="Search by title or speaker"
              className="w-full px-2 py-1.5 border border-slate-300 rounded-md text-sm"
              value={selectedFilters.search || ''}
              onChange={(e) => setFilter({ search: e.target.value })}
            />
          </div>
        )}

        {selectedFilters.view === 'list' && (
          <TimeOptions
            from={selectedFilters.dateFrom}
            to={selectedFilters.dateTo}
            dropInOnly={selectedFilters.dropInOnly}
            onChange={setFilter}
            dropInCount={context.dropInCount}
          />
        )}

        <FilterOptions
          label="Category"
          options={context.categories}
          selectedFilters={selectedFilters.category}
          selectedFilterValues={selectedFilterValues.category}
          onChange={(value: FilterOption[] | null) =>
            setFilter({ category: value })
          }
        />
        {disableVenues || (
          <FilterOptions
            label="Venue"
            options={context.venues}
            selectedFilters={selectedFilters.venue}
            selectedFilterValues={selectedFilterValues.venue}
            onChange={(value: FilterOption[] | null) =>
              setFilter({ venue: value })
            }
          />
        )}

        {selectedFilters.view === 'list' && (
          <FilterOptions
            label="Duration"
            options={context.durations}
            selectedFilters={selectedFilters.duration}
            selectedFilterValues={selectedFilterValues.duration}
            onChange={(value: FilterOption[] | null) =>
              setFilter({ duration: value })
            }
          />
        )}
      </div>
    </div>
  );
}
