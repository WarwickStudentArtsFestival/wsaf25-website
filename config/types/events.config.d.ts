import { EventCategory, EventDurationCategory } from '@/lib/events';

export type EventsConfig = {
  enabled: boolean;

  dates: {
    // The earliest and largest date time that can be selected
    startDateIso: string;
    endDateIso: string;

    // Within the festival dates, the earliest and latest time that can be selected
    startHourUtc: number;
    endHourUtc: number;

    // Minute interval for the time slider. Should be a factor of 60
    intervalMinutes: number;
  };

  // Minimum minutes gap required to show a parent event between two children events
  minimumMinuteGapToShowParentBetweenChildrenEvents: number;

  timeline: {
    // Whether to grey out past times in the timeline view
    greyPastTimes: boolean;
  };

  defaultFilters: {
    // Whether to filter future events based on the current time by default.
    // Should be enabled during WSAF and disabled afterwards.
    filterByCurrentTime: boolean;

    // list or timeline
    view: 'list' | 'timeline';

    // random, time or venue
    sort: 'random' | 'time' | 'venue';
  };

  filterCategories: {
    // Event duration categories to filter by. Must be at least one starting
    // from 0 minutes.
    //
    // The bit field index uniquely identifies a duration category and shouldn't
    // change - if someone shares a URL, this is what identifies the filter
    duration: EventDurationCategory[];

    // Event type categories to filter by. pretalxTrack represents what this
    // category maps to in Pretalx.
    //
    // The bit field index uniquely identifies a duration category and shouldn't
    // change - if someone shares a URL, this is what identifies the filter
    //
    // Get icons from https://react-icons.github.io/react-icons/icons/fa/
    categories: EventCategory[];
  };
};
