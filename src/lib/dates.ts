import {
  endDate,
  endHourUtc,
  minuteInterval,
  startDate,
  startHourUtc,
} from '@/data/dates';

export const formatDate = (date: Date) => {
  const day = date.getDate();

  const getOrdinal = (n: number) => {
    const mod = n % 10;
    if (mod === 1) return 'st';
    if (mod === 2) return 'nd';
    if (mod === 3) return 'rd';
    return 'th';
  };

  const ordinalDay = `${day}${getOrdinal(day)}`;

  const weekday = date.toLocaleDateString([], { weekday: 'long' });
  const month = date.toLocaleDateString([], { month: 'long' });

  return `${weekday} ${ordinalDay} ${month}`;
};

export const formatTime = (date: Date): string => {
  if (date.getHours() === 12 && date.getMinutes() === 0) {
    return 'Midday';
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'pm' : 'am';
  const formattedHour = hours % 12 || 12;
  const formattedMinute = minutes.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${amPm}`;
};

export const formatDuration = (durationInMinutes: number): string => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return minutes > 0 ? `${hours}h ${minutes} min` : `${hours}h`;
};

// Calculate time intervals
export type EventDateTimeInterval = {
  dateTimeLabel: string;
  timeLabel: string;
  date: number;
  index: number;

  // These are used for the first and last intervals
  allowBefore?: boolean;
  allowAfter?: boolean;
};

type EventDateTimeHour = {
  label: string;
  firstIndex: number;
  lastIndex: number;
  minuteIntervals: EventDateTimeInterval[];
};

type EventDateTimeDay = {
  label: string;
  firstIndex: number;
  lastIndex: number;
  hours: EventDateTimeHour[];
};

export type EventDateTimeIntervals = {
  all: EventDateTimeInterval[];
  days: EventDateTimeDay[];
};

function getDateTimeIntervals(): EventDateTimeIntervals {
  const dateTimeIntervals: EventDateTimeIntervals = {
    all: [],
    days: [],
  };

  const currentDate = new Date(startDate);
  currentDate.setMinutes(0, 0, 0);

  let currentDateTimeHour: EventDateTimeHour | null = null;
  let currentDateTimeDay: EventDateTimeDay | null = null;
  let currentDay: number | null = null;
  let currentHour: number | null = null;

  while (currentDate.getTime() <= endDate) {
    if (currentDate.getUTCHours() < startHourUtc) {
      currentDate.setUTCHours(startHourUtc, 0, 0, 0);
    } else if (
      currentDate.getUTCHours() > endHourUtc ||
      (currentDate.getUTCHours() === endHourUtc &&
        currentDate.getUTCMinutes() > 0)
    ) {
      currentDate.setUTCHours(24, 0, 0, 0);
    } else {
      // Add the interval to the list
      const timeLabel = currentDate.toLocaleString('en-gb', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      });

      const hour = currentDate.getUTCHours();
      if (currentHour !== hour || !currentDateTimeHour) {
        currentHour = hour;
        if (currentDateTimeDay && currentDateTimeHour) {
          currentDateTimeHour.lastIndex = dateTimeIntervals.all.length - 1;
          currentDateTimeDay.hours.push(currentDateTimeHour);
        }

        currentDateTimeHour = {
          label: currentDate.toLocaleString('en-gb', {
            hour: 'numeric',
            hour12: true,
          }),
          firstIndex: dateTimeIntervals.all.length,
          lastIndex: dateTimeIntervals.all.length,
          minuteIntervals: [],
        };
      }

      const day = currentDate.getUTCDate();
      if (currentDay !== day || !currentDateTimeDay) {
        currentDay = day;
        if (currentDateTimeDay) {
          currentDateTimeDay.lastIndex = dateTimeIntervals.all.length - 1;
          dateTimeIntervals.days.push(currentDateTimeDay);
        }

        currentDateTimeDay = {
          label: currentDate.toLocaleString('en-gb', { weekday: 'short' }),
          firstIndex: dateTimeIntervals.all.length,
          lastIndex: dateTimeIntervals.all.length,
          hours: [],
        };
      }

      const dateTimeInterval: EventDateTimeInterval = {
        timeLabel,
        dateTimeLabel: `${currentDateTimeDay.label} ${timeLabel}`,
        date: currentDate.getTime(),
        index: dateTimeIntervals.all.length,
      };

      currentDateTimeHour.minuteIntervals.push(dateTimeInterval);
      dateTimeIntervals.all.push(dateTimeInterval);

      // Increment time by interval
      currentDate.setMinutes(currentDate.getMinutes() + minuteInterval);
    }
  }

  if (currentDateTimeDay && currentDateTimeHour) {
    currentDateTimeHour.lastIndex = dateTimeIntervals.all.length - 1;
    currentDateTimeDay.hours.push(currentDateTimeHour);
  }
  if (currentDateTimeDay) {
    currentDateTimeDay.lastIndex = dateTimeIntervals.all.length - 1;
    dateTimeIntervals.days.push(currentDateTimeDay);
  }

  // Set the first and last intervals to allow before and after
  const firstDateTimeInterval = dateTimeIntervals.all[0];
  firstDateTimeInterval.allowBefore = true;
  firstDateTimeInterval.timeLabel = `<${firstDateTimeInterval.timeLabel}`;
  firstDateTimeInterval.dateTimeLabel = `<${firstDateTimeInterval.dateTimeLabel}`;

  const lastDateTimeInterval =
    dateTimeIntervals.all[dateTimeIntervals.all.length - 1];
  lastDateTimeInterval.allowAfter = true;
  lastDateTimeInterval.timeLabel = `${lastDateTimeInterval.timeLabel}+`;
  lastDateTimeInterval.dateTimeLabel = `${lastDateTimeInterval.dateTimeLabel}+`;

  dateTimeIntervals.days[0].hours[0].minuteIntervals[0] = firstDateTimeInterval;
  const lastDay = dateTimeIntervals.days[dateTimeIntervals.days.length - 1];
  const lastHour = lastDay.hours[lastDay.hours.length - 1];
  lastHour.minuteIntervals[lastHour.minuteIntervals.length - 1] =
    lastDateTimeInterval;

  return dateTimeIntervals;
}

export const eventDateTimeIntervals = getDateTimeIntervals();
