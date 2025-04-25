'use client';

import React from 'react';
import Image from 'next/image';
import Ballet from '@/assets/icons/ballet_shoes.png';
import Mask from '@/assets/icons/mask.png';
import Microphone from '@/assets/icons/microphone.png';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Trumpet from '@/assets/icons/trumpet.png';

const iconList = [Ballet, Mask, Microphone, Paintbrush, Trumpet];

function Icons() {
  return (
    <>
      <hr className="border-t-8 border-t-yellow"></hr>
      <div className="grid mx-auto max-w-7xl grid-cols-5 gap-4 p-4 pt-0">
        {iconList.map((icon, idx) => (
          <div key={idx} className="relative aspect-square">
            <Image
              src={icon}
              alt={`Icon ${idx + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Icons;
