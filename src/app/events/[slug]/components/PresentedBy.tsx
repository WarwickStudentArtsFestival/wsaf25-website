import { EventAdmin } from '@/lib/events';

type PresentedByProps = {
  speakers: EventAdmin[];
};

// export default function PresentedBy({ speakers }: PresentedByProps) {
//   const speakerNames = speakers.map((speaker) => speaker.name);

//   return (
//     <div className="flex gap-4 text-teal italic text-2xl">
//       <div className="flex flex-wrap">
//         <span>
//           {speakerNames.length > 2
//             ? speakerNames.slice(0, -1).join(', ') +
//               ' & ' +
//               speakerNames[speakerNames.length - 1]
//             : speakerNames.join(' and ')}
//         </span>
//         {speakers.length === 0 ? (
//           <span>&nbsp;presenting...</span>
//         ) : speakers.length > 1 ? (
//           <span>&nbsp;present...</span>
//         ) : (
//           <span>&nbsp;presents...</span>
//         )}
//       </div>
//     </div>
//   );
// }
