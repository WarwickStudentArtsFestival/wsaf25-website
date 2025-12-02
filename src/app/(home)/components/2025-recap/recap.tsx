import RecapMessage from '@/app/(home)/components/2025-recap/recap-message';
import RecapPhotoGallery from '@/app/(home)/components/2025-recap/recap-photo-gallery';
import RecapInstagramReels from '@/app/(home)/components/2025-recap/recap-instagram-reels';
import React from 'react';

export default function Recap() {
  return (
    <div>
      <RecapMessage />
      <RecapPhotoGallery />
      <RecapInstagramReels />
    </div>
  );
}
