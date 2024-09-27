import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Wsaf2015StandImage from '@/assets/history/wsaf-2015-stand.jpg';

export default function History() {
  return (
    <section className="mb-4 md:mb-8">
      <h2 className="mb-4">History</h2>

      <figure className="mx-4">
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
            className="text-accent"
          >
            WSAF 2014 Help Desk
          </a>
        </figcaption>
      </figure>

      <p className="mt-2 mb-3 mx-auto px-4 max-w-5xl">
        Although restarted last year, Warwick Student Arts Festival is not a
        completely new concept to Warwick - it used to be yearly event from 2004
        to 2015. We&apos;ve done a bit of research into the lore and history of
        WSAF, which can be found{' '}
        <a href="/history" className="text-accent">
          here
        </a>
        .
      </p>

      <a
        href="/history"
        className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          WSAF&apos;s History
        </span>
      </a>
    </section>
  );
}
