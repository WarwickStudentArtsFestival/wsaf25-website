'use client';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';

const startDate = new Date('2025-06-13T09:00:00Z').getTime();
const startHourUtc = 9;
const endHourUtc = 21;
const minuteInterval = 30;
const endDate = new Date('2025-06-16T21:00:00Z').getTime();

const indexToDateMap: number[] = [];
const currentDate = new Date(startDate);
currentDate.setMinutes(0, 0, 0);

while (currentDate.getTime() <= endDate) {
  // Ensure current datetime is within day range
  if (currentDate.getUTCHours() < startHourUtc) {
    currentDate.setUTCHours(startHourUtc, 0, 0, 0);
  } else if (currentDate.getUTCHours() > endHourUtc) {
    currentDate.setUTCHours(24, 0, 0, 0);
  } else {
    indexToDateMap.push(currentDate.getTime());
    currentDate.setMinutes(currentDate.getMinutes() + minuteInterval);
  }
}

const convertIndexToDate = (index: number): Date => {
  return new Date(indexToDateMap[index]);
};

const getFormattedDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: undefined,
    month: undefined,
    day: undefined,
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('en-GB', options);
};

export default function TimeSelection() {
  const [range, setRange] = useState<[number, number]>([
    0,
    indexToDateMap.length - 1,
  ]);

  return (
    <div className="p-4">
      <RangeSlider value={range} onInput={setRange} />

      <p>
        {getFormattedDate(convertIndexToDate(range[0]))}
        {' - '}
        {getFormattedDate(convertIndexToDate(range[1]))}
      </p>
    </div>
  );
}
