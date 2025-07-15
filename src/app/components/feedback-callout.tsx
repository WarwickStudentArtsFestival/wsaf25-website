import { FiSend } from 'react-icons/fi';
import Link from 'next/link';

export default function FeedbackCallout() {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 border border-slate-300 rounded-md p-2 my-4 drop-shadow-md group"
    >
      <div>
        <FiSend className="mt-1 text-xl text-purple group-hover:scale-120 transition-all duration-50" />
      </div>
      <div className="text-left">
        <p className="text-purple font-semibold">Event Feedback</p>
        <p className="text-xs">
          Whether you performed at, volunteered at or attended WSAF, we we would
          love it if you could take five minutes to complete our feedback form.
        </p>
        <p className="text-xs">
          This will be invaluable in helping us to improve and apply for funding
          for future years.
        </p>
        <p className="mt-1 text-xs text-purple group-hover:underline">
          https://wsaf.org.uk/feedback
        </p>
      </div>
    </Link>
  );
}
