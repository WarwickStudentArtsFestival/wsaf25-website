import React, { JSX } from 'react';
import {
  FaTheaterMasks,
  FaMusic,
  FaLaughSquint,
  FaPaintBrush,
  FaFilm,
  FaMicrophoneAlt,
  FaUsers,
  FaMagic,
} from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

interface IconProps {
  track: string;
  size: number;
}

const TrackIcon: React.FC<IconProps> = ({ track, size }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Theatre: <FaTheaterMasks size={size} />,
    Music: <FaMusic size={size} />,
    Comedy: <FaLaughSquint size={size} />,
    Mixed: <FaUsers size={size} />,
    Dance: <FaMicrophoneAlt size={size} />,
    VisualArt: <FaPaintBrush size={size} />,
    Creation: <FaMagic size={size} />,
    MTWStagefest: <FaPeopleGroup size={size} />,
    Film: <FaFilm size={size} />,
    SpokenWord: <FaMicrophoneAlt size={size} />,
  };

  return iconMap[track.replace(/\s+/g, '')] || null;
};

export default TrackIcon;
