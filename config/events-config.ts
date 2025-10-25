import { EventsConfig } from '@config/types/events.config';

const eventsConfig: EventsConfig = {
  enabled: true,

  defaultFilters: {
    // Whether to filter future events based on the current time by default.
    // Should be enabled during WSAF and disabled afterwards.
    filterByCurrentTime: false,

    // list or timeline
    view: 'list',

    // random, time or venue
    sort: 'random',
  },
};

export default eventsConfig;
