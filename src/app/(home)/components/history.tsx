import { FiBookOpen } from 'react-icons/fi';
import { FaRegHourglass } from 'react-icons/fa';
import Image from 'next/image';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Wsaf2015StandImage from '@/assets/history/wsaf-2015-stand.jpg';
import Link from 'next/link';
import LastYearGallery from '@/app/history/components/last-year-gallery';

export default function History() {
  return (
    <section className="bg-teal text-slate-200 px-4 py-8 mb-4">
      <HighlightedHeading text="History" />
      <h2 className="text-white text-2xl font-semibold mb-2">
        The History of WSAF
      </h2>

      <figure className="mx-4 mb-4">
        <Image
          src={Wsaf2015StandImage}
          alt="The WSAF stand in 2015"
          className="w-full max-w-80 mx-auto"
        />
        <figcaption className="text-xs mt-0.5">
          <a
            href="https://www.facebook.com/photo/?fbid=495940720558871&set=a.287594771393468"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow"
          >
            WSAF 2014 Help Desk
          </a>
        </figcaption>
      </figure>

      <p>
        The Warwick Student Arts Festival used to be a yearly event from 2004 to
        2015.
      </p>
      <p>
        Last year, a group of students decided to bring it back, and it was a
        huge success! We saw 2,500+ people celebrate the arts at Warwick across
        70+ events and 9 venues.
      </p>

      <div className="flex items-center justify-center gap-2 my-2 text-white">
        <a
          href="https://2024.wsaf.org.uk"
          className="inline-block bg-purple px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105"
          target="_blank"
        >
          <span className="text-xl uppercase font-bold">
            <FiBookOpen className="inline-block mb-1 mr-2" />
            WSAF 2024
          </span>
        </a>
        <Link
          href="/history"
          className="inline-block bg-purple px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105"
        >
          <span className="text-xl uppercase font-bold">
            <FaRegHourglass className="inline mr-2 mb-1" />
            WSAF History
          </span>
        </Link>
      </div>

      <LastYearGallery />
      <p className="mt-0.5 mb-4 text-white text-sm">WSAF 2024 Photos</p>
    </section>
  );
}
