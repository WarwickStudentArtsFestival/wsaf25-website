import React, { JSX } from 'react';
import {
  FaTheaterMasks,
  FaMusic,
  FaLaughSquint,
  FaPaintBrush,
  FaFilm,
  FaMicrophoneAlt,
  FaUsers,
  FaWalking,
  FaMagic,
  FaPersonBooth,
} from 'react-icons/fa';

interface IconProps {
  track: string;
  size: number;
}

export const trackColorMap: { [key: string]: string } = {
  Theatre: '#a855f7', // purple-500
  Music: '#3b82f6', // blue-500
  Comedy: '#f59e0b', // amber-500
  Mixed: '#10b981', // emerald-500
  Dance: '#ef4444', // red-500
  VisualArt: '#f97316', // orange-500
  Creation: '#8b5cf6', // violet-500
  MTWStagefest: '#14b8a6', // teal-500
  Film: '#64748b', // slate-500
  SpokenWord: '#ec4899', // pink-500
};

const iconMap: { [key: string]: JSX.Element } = {
  Theatre: <FaTheaterMasks />,
  Music: <FaMusic />,
  Comedy: <FaLaughSquint />,
  Mixed: <FaUsers />,
  Dance: <FaWalking />,
  VisualArt: <FaPaintBrush />,
  Creation: <FaMagic />,
  MTWStagefest: <FaPersonBooth />,
  Film: <FaFilm />,
  SpokenWord: <FaMicrophoneAlt />,
};

const TrackIcon: React.FC<IconProps> = ({ track, size }) => {
  const key = track.replace(/\s+/g, ''); // remove spaces
  const IconComponent = iconMap[key];
  if (!IconComponent) return null;
  return React.cloneElement(IconComponent, { size });
};

export default TrackIcon;
