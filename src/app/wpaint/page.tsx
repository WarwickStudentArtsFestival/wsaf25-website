import PaintApp from '@/app/wpaint/components/paint-app';
import { getGalleryFiles } from '@/app/wpaint/lib/getGalleryFiles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W-Paint',
};

export default async function WPaint() {
  const galleryFiles = await getGalleryFiles();
  return <PaintApp galleryFiles={galleryFiles} />;
}
