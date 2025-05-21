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
