'use client';
import { FiShare2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import type { Event } from '@/lib/events';

type ShareProps = {
  talk: Event;
};

export default function Share({ talk }: ShareProps) {
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/events/${talk.id}`
      : `/events/${talk.id}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: talk.name,
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
    <div className=" bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <button
        onClick={handleShare}
        className="flex items-center justify-between w-full cursor-pointer transition-colors duration-100"
      >
        <div className="flex items-center gap-4">
          <FiShare2 className="h-5 w-5" />
          <h3 className="text-black text-lg font-semibold">Share</h3>
        </div>
      </button>
    </div>
  );
}
