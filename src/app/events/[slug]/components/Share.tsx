'use client';
import { Talk } from '@/app/lib/types';
import { FiShare2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

type ShareProps = {
  talk: Talk;
};

export default function Share({ talk }: ShareProps) {
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/events/${talk.code}`
      : `/events/${talk.code}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: talk.title,
          url: shareUrl,
        });
        toast.success('Shared successfully!');
      } catch (err) {
        console.error('Error sharing:', err);
        toast.error('Sharing failed. Please try again.');
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
    <div className=" bg-white p-6 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-102 transition duration-150 ease-in-out">
      <button
        onClick={handleShare}
        className="flex items-center justify-between w-full cursor-pointer hover:text-purple-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="text-purple-500">
            <FiShare2 className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="text-teal text-lg font-semibold">Share</h3>
            <p className="text-sm text-black">Copy to Clipboard</p>
          </div>
        </div>
      </button>
    </div>
  );
}
