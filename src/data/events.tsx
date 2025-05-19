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
  FaUsers,
  FaWalking,
} from 'react-icons/fa';

// There must be at least one or things will break!
export const durationCategories: EventDurationCategory[] = [
  {
    slug: 'short',
    label: 'Short',
    minMinutes: 0,
  },
  {
    slug: 'medium',
    label: 'Medium',
    minMinutes: 15,
  },
  {
    slug: 'long',
    label: 'Long',
    minMinutes: 60,
  },
];

export const eventCategories: EventCategory[] = [
  {
    pretalxTrack: 'Theatre',
    slug: 'theatre',
    label: 'Theatre',
    icon: <FaTheaterMasks />,
    colour: '#a855f7', // purple-500
  },
  {
    pretalxTrack: 'Music',
    slug: 'music',
    label: 'Music',
    icon: <FaMusic />,
    colour: '#3b82f6', // blue-500
  },
  {
    pretalxTrack: 'Comedy',
    slug: 'comedy',
    label: 'Comedy',
    icon: <FaLaughSquint />,
    colour: '#f59e0b', // amber-500
  },
  {
    pretalxTrack: 'Mixed',
    slug: 'mixed',
    label: 'Mixed',
    icon: <FaUsers />,
    colour: '#10b981', // emerald-500
  },
  {
    pretalxTrack: 'Dance',
    slug: 'dance',
    label: 'Dance',
    icon: <FaWalking />,
    colour: '#ef4444', // red-500
  },
  {
    pretalxTrack: 'Visual Art',
    slug: 'visual-art',
    label: 'Visual Art',
    icon: <FaPaintBrush />,
    colour: '#f97316', // orange-500
  },
  {
    pretalxTrack: 'Creation',
    slug: 'creation',
    label: 'Creation',
    icon: <FaMagic />,
    colour: '#8b5cf6', // violet-500
  },
  {
    pretalxTrack: 'MTW Stagefest',
    slug: 'mtw-stagefest',
    label: 'MTW Stagefest',
    icon: <FaPersonBooth />,
    colour: '#14b8a6', // teal-500
  },
  {
    pretalxTrack: 'Film',
    slug: 'film',
    label: 'Film',
    icon: <FaFilm />,
    colour: '#64748b', // slate-500
  },
  {
    pretalxTrack: 'Spoken Word',
    slug: 'spoken-word',
    label: 'Spoken Word',
    icon: <FaMicrophoneAlt />,
    colour: '#ec4899', // pink-500
  },
];
