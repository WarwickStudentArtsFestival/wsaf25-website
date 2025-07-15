'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FeedbackPopup() {
  const [showModal, setShowModal] = useState(false);

  function showFeedback() {
    setShowModal(true);
  }

  function closeFeedback() {
    setShowModal(false);
    localStorage.setItem('hide2025FeedbackPopup', '1');
  }

  useEffect(() => {
    if (localStorage.getItem('hide2025FeedbackPopup') !== '1') {
      setTimeout(showFeedback, 2000); // Show after 2 seconds
    }
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed z-100 bottom-0 right-0 top-0 left-0 bg-black/50 p-4 pt-20"
      onClick={closeFeedback}
    >
      <div
        className="bg-slate-50 max-w-xl mx-auto p-4 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-xl text-teal font-semibold mb-2">Event Feedback</h2>
        <p className="text-sm">
          Whether you performed at, volunteered at or attended WSAF, we would
          love it if you could take five minutes to complete our feedback form.
        </p>
        <p className="mt-2 text-sm">
          This will be invaluable in helping us to improve and apply for funding
          for future years.
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-teal text-white px-4 py-2 rounded hover:scale-105"
          onClick={closeFeedback}
        >
          Give Feedback
        </Link>
        <button
          className="block mx-auto text-xs mt-0.5 text-slate-600 cursor-pointer hover:underline"
          onClick={closeFeedback}
        >
          Close
        </button>
      </div>
    </div>
  );
}
