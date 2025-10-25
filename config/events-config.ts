import { EventsConfig } from '@config/types/events.config';
import {
  FaFilm,
  FaLaughSquint,
  FaMagic,
  FaMicrophoneAlt,
  FaMusic,
  FaPaintBrush,
  FaPersonBooth,
  FaTheaterMasks,
  FaWalking,
} from 'react-icons/fa';

const eventsConfig: EventsConfig = {
  enabled: true,

  dates: {
    // The earliest and largest date time that can be selected
    startDateIso: '2025-06-13T09:00:00Z',
    endDateIso: '2025-06-16T21:00:00Z',

    // Within the festival dates, the earliest and latest time that can be selected
    startHourUtc: 9, // 10am
    endHourUtc: 21, // 10pm

    // Minute interval for the time slider. Should be a factor of 60
    intervalMinutes: 15,
  },

  timeline: {
    // Whether to grey out past times in the timeline view
    greyPastTimes: false,
  },

  // Minimum minutes gap required to show a parent event between two children events
  minimumMinuteGapToShowParentBetweenChildrenEvents: 10,

  defaultFilters: {
    // Whether to filter future events based on the current time by default.
    // Should be enabled during WSAF and disabled afterwards.
    filterByCurrentTime: false,

    // list or timeline
    view: 'list',

    // random, time or venue
    sort: 'random',
  },

  filterCategories: {
    // Event duration categories to filter by. Must be at least one starting
    // from 0 minutes.
    //
    // The bit field index uniquely identifies a duration category and shouldn't
    // change - if someone shares a URL, this is what identifies the filter
    duration: [
      {
        slug: 'short',
        label: 'Short (<15m)',
        minMinutes: 0,
        filterBitFieldIndex: 1,
      },
      {
        slug: 'medium',
        label: 'Medium (15m-1h)',
        minMinutes: 15,
        filterBitFieldIndex: 2,
      },
      {
        slug: 'long',
        label: 'Long (>1h)',
        minMinutes: 60,
        filterBitFieldIndex: 3,
      },
    ],

    // Event type categories to filter by. pretalxTrack represents what this
    // category maps to in Pretalx.
    //
    // The bit field index uniquely identifies a duration category and shouldn't
    // change - if someone shares a URL, this is what identifies the filter
    //
    // Get icons from https://react-icons.github.io/react-icons/icons/fa/
    categories: [
      {
        pretalxTrack: 'Theatre',
        slug: 'theatre',
        label: 'Theatre',
        icon: FaTheaterMasks,
        colour: '#a855f7', // purple-500
        filterBitFieldIndex: 1,
      },
      {
        pretalxTrack: 'Music',
        slug: 'music',
        label: 'Music',
        icon: FaMusic,
        colour: '#3b82f6', // blue-500
        filterBitFieldIndex: 2,
      },
      {
        pretalxTrack: 'Comedy',
        slug: 'comedy',
        label: 'Comedy',
        icon: FaLaughSquint,
        colour: '#f59e0b', // amber-500
        filterBitFieldIndex: 3,
      },
      {
        pretalxTrack: 'Dance',
        slug: 'dance',
        label: 'Dance',
        icon: FaWalking,
        colour: '#ef4444', // red-500
        filterBitFieldIndex: 5,
      },
      {
        pretalxTrack: 'Visual Art (displayed)',
        slug: 'visual-art',
        label: 'Visual Art',
        icon: FaPaintBrush,
        colour: '#f97316', // orange-500
        filterBitFieldIndex: 6,
      },
      {
        pretalxTrack: 'Workshop',
        slug: 'workshop',
        label: 'Workshop',
        icon: FaMagic,
        colour: '#8b5cf6', // violet-500
        filterBitFieldIndex: 7,
      },
      {
        pretalxTrack: 'MTW Stagefest',
        slug: 'mtw-stagefest',
        label: 'MTW Stagefest',
        icon: FaPersonBooth,
        colour: '#14b8a6', // teal-500
        filterBitFieldIndex: 8,
      },
      {
        pretalxTrack: 'Film',
        slug: 'film',
        label: 'Film',
        icon: FaFilm,
        colour: '#64748b', // slate-500
        filterBitFieldIndex: 9,
      },
      {
        pretalxTrack: 'Spoken Word',
        slug: 'spoken-word',
        label: 'Spoken Word',
        icon: FaMicrophoneAlt,
        colour: '#ec4899', // pink-500
        filterBitFieldIndex: 10,
      },
    ],
  },
};

export default eventsConfig;
