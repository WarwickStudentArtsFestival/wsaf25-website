import PaintApp from '@/app/wpaint/components/paint-app';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W-Paint',
};

export default function WPaint() {
  return <PaintApp />;
}
