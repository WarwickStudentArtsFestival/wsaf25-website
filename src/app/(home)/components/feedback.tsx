import { FiSend } from 'react-icons/fi';
import Link from 'next/link';

export default function Feedback() {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-1 bg-purple px-6 py-4 rounded-md drop-shadow-xs hover:scale-105 text-white mx-2 text-center w-full max-w-md"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex items-center gap-2 text-yellow text-xl font-bold">
          <FiSend className="text-2xl" />
          Event Feedback
        </p>
        <p className="text-sm text-slate-300 leading-4 text-center">
          We would appreciate any feedback on any of our events.
        </p>
      </div>
    </Link>
  );
}
