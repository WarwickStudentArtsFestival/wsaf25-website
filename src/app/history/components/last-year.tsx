import { FiBookOpen } from 'react-icons/fi';
import HighlightedHeading from '@/app/components/highlighted-heading';
import LastYearGallery from './last-year-gallery';

export default function LastYearSection() {
  return (
    <>
      <HighlightedHeading text="Last Year" />

      <p>
        The Warwick Student Arts Festival used to be a yearly event from 2004 to
        2015.
      </p>
      <p>
        Last year, a group of students decided to bring it back, and it was a
        huge success! We saw 2,500+ people celebrate the arts at Warwick across
        70+ events and 9 venues.
      </p>
      <h1 className="text-teal text-2xl font-semibold mb-2">
        WSAF 2024 Photos
      </h1>
      <LastYearGallery />

      <div className="flex flex-col mb-4 sm:flex-row items-center justify-center gap-2 my-2 text-white">
        <a
          href="https://2024.wsaf.org.uk"
          className="inline-block bg-purple px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105"
          target="_blank"
        >
          <span className="text-xl uppercase font-bold">
            <FiBookOpen className="inline-block mb-1 mr-2" />
            2024 Website
          </span>
        </a>
      </div>
    </>
  );
}
