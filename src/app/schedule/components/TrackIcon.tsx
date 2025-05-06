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
}

const TrackIcon: React.FC<IconProps> = ({ track }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Theatre: <FaTheaterMasks />,
    Music: <FaMusic />,
    Comedy: <FaLaughSquint />,
    Mixed: <FaUsers />,
    Dance: <FaMicrophoneAlt />,
    VisualArt: <FaPaintBrush />,
    Creation: <FaMagic />,
    MTWStagefest: <FaPeopleGroup />,
    Film: <FaFilm />,
    SpokenWord: <FaMicrophoneAlt />,
  };

  return iconMap[track.replace(/\s+/g, '')] || null;
};

export default TrackIcon;
