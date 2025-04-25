'use client';

import React from 'react';
import Icon from './Icon';
import Ballet from '@/assets/icons/ballet_shoes.png';
import Mask from '@/assets/icons/mask.png';
import Microphone from '@/assets/icons/microphone.png';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Trumpet from '@/assets/icons/trumpet.png';

const iconList = [
  { src: Ballet, alt: 'Ballet Shoes Icon' },
  { src: Mask, alt: 'Mask Icon' },
  { src: Microphone, alt: 'Microphone Icon' },
  { src: Paintbrush, alt: 'Paintbrush Icon' },
  { src: Trumpet, alt: 'Trumpet Icon' },
];

function Icons() {
  return (
    <div className="relative">
      <hr className="absolute top-0 left-0 w-full border-t-12 border-white z-10" />
      <hr className="absolute top-2 left-0 w-full border-t-10 border-yellow-400 z-10" />
      <div className="grid mx-auto max-w-7xl grid-cols-5 gap-4 p-4 pt-4 relative z-0">
        {iconList.map((icon, idx) => (
          <Icon key={idx} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
}

export default Icons;
