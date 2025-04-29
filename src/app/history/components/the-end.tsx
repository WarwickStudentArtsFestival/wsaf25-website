import Image from 'next/image';
import Link from 'next/link';
import Wsaf2014Logo from '@/assets/history/wsaf-2014-logo.jpg';
import Wsaf2015Logo from '@/assets/history/wsaf-2015-logo.jpg';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function FinalYearsSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <HighlightedHeading text="The End?" />

      <div className="sm:mt-2 mb-2 flex gap-4 justify-center items-center">
        <figure>
          <Image
            src={Wsaf2014Logo}
            alt="WSAF 2014 Logo"
            className="object-contain 2xs:h-32 w-auto"
          />
          <figcaption className="text-xs mt-0.5">
            <a
              href="https://warwick.ac.uk/insite/news/intnews2/wsaf2014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF 2014 Logo
            </a>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={Wsaf2015Logo}
            alt="WSAF 2015 Logo"
            className="object-contain h-32 w-auto"
          />
          <figcaption className="text-xs mt-0.5">
            <a
              href="https://www.facebook.com/photo/?fbid=158415133533661&set=pb.100080955263187.-2207520000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF 2015 Logo
            </a>
          </figcaption>
        </figure>
      </div>

      <div>
        <p className="mb-2">
          <a
            href="https://warwick.ac.uk/insite/news/intnews2/wsaf2014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal"
          >
            WSAF 2014
          </a>{' '}
          and{' '}
          <a
            href="https://www.facebook.com/warwickstudentartsfest/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal"
          >
            2015
          </a>{' '}
          are the last festivals we can find. Although we are unable to find
          much information about these or WSAF stopped, WSAF 2014 started using
          a{' '}
          <a
            href="https://www.facebook.com/warwickstudentartsfest/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal"
          >
            Facebook page
          </a>{' '}
          which still exists today, containing many images of what the last
          festivals were like.
        </p>
        <p>
          But this is not the end of the story! 9 years later, WSAF 2024 is
          being launched by a completely new team, and we hope that this can
          continue for many years into the future. As you excited as we are, or
          has this page inspired you to help?{' '}
          <Link href="/team" className="text-teal">
            Join our team!
          </Link>
        </p>
      </div>
    </div>
  );
}
