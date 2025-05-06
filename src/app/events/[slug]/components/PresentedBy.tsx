import { Speaker } from '@/app/lib/types';
import { FiUser } from 'react-icons/fi';

type PresentedByProps = {
  speakers: Speaker[];
};

export default function PresentedBy({ speakers }: PresentedByProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-black flex items-center">
        <FiUser className="h-5 w-5 text-purple-500 mr-2" />
        Presented By:
      </h3>
      <div className="flex flex-wrap gap-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.code}
            className="flex items-center gap-2 text-lg text-gray-700"
          >
            <span className="font-medium">{speaker.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
