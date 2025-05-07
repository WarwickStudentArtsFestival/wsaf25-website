import { Speaker } from '@/app/lib/types';

type PresentedByProps = {
  speakers: Speaker[];
};

export default function PresentedBy({ speakers }: PresentedByProps) {
  const speakerNames = speakers.map((speaker) => speaker.name);

  return (
    <div className="flex gap-4 text-teal italic text-2xl">
      <div className="flex flex-wrap">
        <span>
          {speakerNames.length > 2
            ? speakerNames.slice(0, -1).join(', ') +
              ' & ' +
              speakerNames[speakerNames.length - 1]
            : speakerNames.join(' and ')}
        </span>
        {(speakers.length > 1 && <span>&nbsp;present...</span>) || (
          <span>&nbsp;presents...</span>
        )}
      </div>
    </div>
  );
}
