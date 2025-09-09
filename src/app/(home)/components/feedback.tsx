import { FiSend } from 'react-icons/fi';
import Link from 'next/link';
import mainConfig from '@config/main-config';

export default function Feedback() {
  return (
    <Link
      href={mainConfig.feedback.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-1 bg-purple px-6 py-4 rounded-md drop-shadow-xs hover:scale-105 text-white mx-2 text-center w-full max-w-md"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex items-center gap-2 text-yellow text-xl font-bold">
          <FiSend className="text-2xl" />
          Event Feedback
        </p>
        <p className="text-sm font-semibold text-slate-300 leading-4 text-center">
          Whether you performed at, volunteered at or attended WSAF, we we would
          love it if you could take five minutes to complete our feedback form.
        </p>
        <p className="text-sm text-slate-300 leading-4 text-center">
          This will be invaluable in helping us to improve and apply for funding
          for future years.
        </p>
      </div>
    </Link>
  );
}
