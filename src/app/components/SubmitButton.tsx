import { FiCalendar } from 'react-icons/fi';

export default function SubmitButton() {
  return (
    <a
      href="https://submit.wsaf.org.uk/2025/cfp"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center uppercase font-semibold text-black bg-yellow px-4 py-2 drop-shadow-sm hover:scale-105 transition-transform"
    >
      <FiCalendar className="mr-1" />
      Submit Event
    </a>
  );
}
