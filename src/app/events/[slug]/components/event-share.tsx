'use client';
import { FiShare2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import type { Event } from '@/lib/events';

export default function EventShare({
  event,
  accentColour,
}: {
  event: Event;
  accentColour: string;
}) {
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/events/${event.slug}`
      : `/events/${event.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.name,
          url: shareUrl,
        });
        toast.success('Shared successfully!');
      } catch (err) {
        console.error('Error sharing:', err);
        toast.error('Sharing cancelled.');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Link copied to clipboard!');
      } catch {
        toast.error('Failed to copy the link.');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center w-full gap-4 cursor-pointer bg-white p-4 shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out"
    >
      <FiShare2 className="h-5 w-5" style={{ color: accentColour }} />
      <h3 className="text-black text-lg font-semibold">Share</h3>
    </button>
  );
}
