import DatetimeSelector from '@/app/events/components/event-sessions-list/datetime-selector';
import { SelectedFilters } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import { eventDateTimeIntervals } from '@/lib/dates';

export default function TimeOptions({
  from,
  to,
  dropInOnly,
  onChange,
}: {
  from: number;
  to: number;
  dropInOnly: boolean;
  onChange: (newFilters: Partial<SelectedFilters>) => void;
}) {
  const handleReset = () => {
    onChange({ dateFrom: 0, dateTo: eventDateTimeIntervals.all.length - 1 });
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-semibold">Time</h4>
        <button
          type="button"
          className="text-xs text-blue-600 hover:underline cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div>
        <div className="inline-flex gap-2 items-center">
          <span>From</span>
          <DatetimeSelector
            dateTimeIndex={from}
            onChange={(value: number) => onChange({ dateFrom: value })}
          />
          <span>to</span>
          <DatetimeSelector
            dateTimeIndex={to}
            onChange={(value: number) => onChange({ dateTo: value })}
          />
        </div>
        <label className="mt-1 flex items-center cursor-pointer w-full">
          <input
            type="checkbox"
            checked={dropInOnly}
            onChange={() => onChange({ dropInOnly: !dropInOnly })}
            className="mr-2 h-4 w-4"
          />
          <div className="flex items-center gap-2 flex-1">
            <span className="text-sm">Show Drop-in Events Only</span>
            <span className="text-xs text-gray-500">(2)</span>
          </div>
        </label>
      </div>
    </div>
  );
}
