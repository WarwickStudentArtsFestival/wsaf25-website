import Image from 'next/image';
import Wsaf2004Poster from '@/assets/history/wsaf-2004-poster.jpg';
import Wsaf2004Dj from '@/assets/history/wsaf-2004-dj.jpg';
import Wsaf2004Breakdancing from '@/assets/history/wsaf-2004-breakdancing.jpg';
import Wsaf2004Film from '@/assets/history/wsaf-2004-film.jpg';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function EarlyYearsSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <HighlightedHeading text="The Beginning" />

      <div className="flex-col-reverse sm:flex-row flex gap-2 sm:gap-4 mb-2">
        <div className="sm:w-96 grow sm:text-right">
          <p className="mb-2">
            The{' '}
            <a
              href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
              className="text-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              first ever Warwick Student Arts Festival
            </a>{' '}
            took place from Sunday 20th June to Thursday 24th June 2004, being
            described as a
            <em>
              &quot;spectacular celebration of the creative talent at the
              University, encapsulating virtually every artistic genre
              imaginable.&quot;
            </em>{' '}
            This festival had 60 events involving around 700 students, ranging
            from a &apos;Paint Explosion&apos; and &apos;Prom in the Park&apos;
            to an &apos;Indian Raga Evening&apos; and &apos;Stomp Style
            Percussion&apos;.{' '}
            <a
              href="https://www.bbc.co.uk/coventry/features/student/break-dancing-at-warwick-uni.shtml"
              className="text-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              An article from BBC News
            </a>{' '}
            also reported breakdancing, a 24-hour DJ marathon and Student Film
            Festival.
          </p>
          <p>
            The next year,{' '}
            <a
              href="https://web.archive.org/web/20210918050951/https://blogs.warwick.ac.uk/wsaf/?num=10&start=10"
              className="text-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              WSAF &apos;05
            </a>
            , featured a <strong>piazza stage</strong> and started with an hour
            and a half of <em>&quot;The Greatest Show on Campus&quot;</em>, a
            combination of magic, juggling and music. This festival also
            included WSAF postcards and a printed programme, with hundreds of
            volunteers.
          </p>
        </div>
        <figure>
          <Image
            src={Wsaf2004Poster}
            alt="Poster from WSAF 2004"
            className="w-36 object-contain mx-auto"
            placeholder="blur"
            priority
          />
          <figcaption className="text-xs mt-0.5">
            <a
              href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF 2004 Poster
            </a>
          </figcaption>
        </figure>
      </div>

      <figure className="mb-4">
        <div className="flex gap-4 justify-center flex-wrap">
          <Image
            src={Wsaf2004Dj}
            alt="24-hour DJ marathon at WSAF '04"
            placeholder="blur"
            className="object-contain h-40 w-auto"
          />
          <Image
            src={Wsaf2004Breakdancing}
            alt="Breakdancing at WSAF '04"
            placeholder="blur"
            className="object-contain h-40 w-auto"
          />
          <Image
            src={Wsaf2004Film}
            alt="12 foot high outdoor screen at WSAF '04"
            placeholder="blur"
            className="object-contain h-40 w-auto"
          />
        </div>
        <figcaption className="text-xs mt-0.5">
          <a
            href="https://www.bbc.co.uk/coventry/features/student/break-dancing-at-warwick-uni.shtml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal"
          >
            WSAF &apos;04 Images from BBC News
          </a>
        </figcaption>
      </figure>

      <div className="flex-col sm:flex-row flex gap-4 sm:text-left mb-2">
        <figure>
          <iframe
            width="241"
            height="180"
            src="https://www.youtube.com/embed/zdXN7Y-Flxo?si=hP0IUv_ZMrEANFXy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mx-auto"
          ></iframe>
          <figcaption className="text-xs mt-0.5 text-center">
            <a
              href="https://www.youtube.com/watch?v=zdXN7Y-Flxo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF Amarillo Music Video
            </a>
          </figcaption>
        </figure>
        <div className="sm:w-96 grow">
          <p className="mb-2">
            Perhaps one of the most notable relics of WSAF &apos;05 was the{' '}
            <a
              href="https://www.youtube.com/watch?v=zdXN7Y-Flxo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF Amarillo Music Video Trailer
            </a>
            , which premiered to over 3,000 people at Top Banana (the Student
            Union nightclub event predating Pop!). This was reportedly Warwick
            TV&apos;s most popular video in 2008, and won the &quot;Highly
            Commended Music to Video&quot; award at the 2006 National Student
            Television Association Awards.
          </p>
          <p>
            We can&apos;t anything about WSAF &apos;06 and can only find very
            little about{' '}
            <a
              href="https://web.archive.org/web/20070630063134/http://www.wsaf.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF &apos;07
            </a>
            . However, we do know that WSAF &apos;07 featured over 77 events and
            took place over 5 days so can only assume that WSAF grew and grew
            each year. We also know that while some events in WSAF &apos;04 were
            paid, by WSAF &apos;07 the full festival was free.
          </p>
        </div>
      </div>
    </div>
  );
}
