import { EventCategory, EventDurationCategory } from '@/lib/events';
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

// There must be at least one or things will break!
export const durationCategories: EventDurationCategory[] = [
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
];

export const eventCategories: EventCategory[] = [
  {
    pretalxTrack: 'Theatre',
    slug: 'theatre',
    label: 'Theatre',
    icon: <FaTheaterMasks />,
    colour: '#a855f7', // purple-500
    filterBitFieldIndex: 1,
  },
  {
    pretalxTrack: 'Music',
    slug: 'music',
    label: 'Music',
    icon: <FaMusic />,
    colour: '#3b82f6', // blue-500
    filterBitFieldIndex: 2,
  },
  {
    pretalxTrack: 'Comedy',
    slug: 'comedy',
    label: 'Comedy',
    icon: <FaLaughSquint />,
    colour: '#f59e0b', // amber-500
    filterBitFieldIndex: 3,
  },
  // {
  //   pretalxTrack: 'Mixed',
  //   slug: 'mixed',
  //   label: 'Mixed',
  //   icon: <FaUsers />,
  //   colour: '#10b981', // emerald-500
  //   filterBitFieldIndex: 4,
  // },
  {
    pretalxTrack: 'Dance',
    slug: 'dance',
    label: 'Dance',
    icon: <FaWalking />,
    colour: '#ef4444', // red-500
    filterBitFieldIndex: 5,
  },
  {
    pretalxTrack: 'Visual Art (displayed)',
    slug: 'visual-art',
    label: 'Visual Art',
    icon: <FaPaintBrush />,
    colour: '#f97316', // orange-500
    filterBitFieldIndex: 6,
  },
  {
    pretalxTrack: 'Workshop',
    slug: 'workshop',
    label: 'Workshop',
    icon: <FaMagic />,
    colour: '#8b5cf6', // violet-500
    filterBitFieldIndex: 7,
  },
  {
    pretalxTrack: 'MTW Stagefest',
    slug: 'mtw-stagefest',
    label: 'MTW Stagefest',
    icon: <FaPersonBooth />,
    colour: '#14b8a6', // teal-500
    filterBitFieldIndex: 8,
  },
  {
    pretalxTrack: 'Film',
    slug: 'film',
    label: 'Film',
    icon: <FaFilm />,
    colour: '#64748b', // slate-500
    filterBitFieldIndex: 9,
  },
  {
    pretalxTrack: 'Spoken Word',
    slug: 'spoken-word',
    label: 'Spoken Word',
    icon: <FaMicrophoneAlt />,
    colour: '#ec4899', // pink-500
    filterBitFieldIndex: 10,
  },
];

// Minimum minutes between children events before the parent event will be shown
export const minimumMinutesToShowParentBetweenChildrenEvents = 10;
