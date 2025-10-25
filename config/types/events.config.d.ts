export type EventsConfig = {
  enabled: boolean;

  defaultFilters: {
    // Whether to filter future events based on the current time by default.
    // Should be enabled during WSAF and disabled afterwards.
    filterByCurrentTime: boolean;

    // list or timeline
    view: 'list' | 'timeline';

    // random, time or venue
    sort: 'random' | 'time' | 'venue';
  };
};
