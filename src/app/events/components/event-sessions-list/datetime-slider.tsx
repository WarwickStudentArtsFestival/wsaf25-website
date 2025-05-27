'use client';

import { Slider } from '@mui/material';
import { SelectedFilters } from '@/app/events/components/event-sessions-list/event-sessions-filters';
import { eventDateTimeIntervals } from '@/lib/dates';
import DatetimeSelector from '@/app/events/components/event-sessions-list/datetime-selector';

function sliderValueLabel(value: number) {
  return eventDateTimeIntervals.all[value].dateTimeLabel;
}

const marks = eventDateTimeIntervals.days.map((day) => ({
  value: day.firstIndex,
  label: day.label,
}));

export default function DatetimeSlider({
  fromIndex,
  toIndex,
  onChange,
  eventCount,
}: {
  fromIndex: number;
  toIndex: number;
  onChange: (value: Partial<SelectedFilters>) => void;
  eventCount: number;
}) {
  const onSliderChange = (event: Event, newValue: number[]) => {
    onChange({ dateFrom: newValue[0], dateTo: newValue[1] });
  };

  return (
    <div className="px-8 sm:pt-2 pb-1 lg:sticky bg-white z-20 top-16">
      <div className="inline-flex gap-0.5 items-center text-sm text-black flex-wrap justify-center">
        <div className="inline-flex gap-1.5 items-center">
          <span>Showing</span>
          <span className="font-medium">{eventCount}</span>
          <span>WSAF events from</span>
        </div>
        <div className="inline-flex gap-1.5 items-center">
          <DatetimeSelector
            dateTimeIndex={fromIndex}
            onChange={(value: number) => onChange({ dateFrom: value })}
            small
          />
          <span>to</span>
          <DatetimeSelector
            dateTimeIndex={toIndex}
            onChange={(value: number) => onChange({ dateTo: value })}
            small
          />
        </div>
      </div>

      <div className="xs:hidden !-mt-2">
        <Slider
          value={[fromIndex, toIndex]}
          min={0}
          max={eventDateTimeIntervals.all.length - 1}
          step={1}
          onChange={onSliderChange}
          valueLabelDisplay="auto"
          getAriaLabel={() => 'Date Range'}
          getAriaValueText={sliderValueLabel}
          valueLabelFormat={sliderValueLabel}
          marks={marks}
          size="small"
        />
      </div>
      <div className="hidden xs:block !-mt-2">
        <Slider
          value={[fromIndex, toIndex]}
          min={0}
          max={eventDateTimeIntervals.all.length - 1}
          step={1}
          onChange={onSliderChange}
          valueLabelDisplay="auto"
          getAriaLabel={() => 'Date Range'}
          getAriaValueText={sliderValueLabel}
          valueLabelFormat={sliderValueLabel}
          marks={marks}
        />
      </div>
    </div>
  );
}
