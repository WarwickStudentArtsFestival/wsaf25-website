import Image from 'next/image';
import { FiBookOpen } from 'react-icons/fi';
import HighlightedHeading from '@/app/components/highlighted-heading';
import PiazzaStage from '@/assets/images/stage.jpg';
import Dance from '@/assets/images/dance.jpg';
import Curiositea from '@/assets/images/curiositea.jpg';
import Art from '@/assets/images/art.jpg';
import Curiositea2 from '@/assets/images/curiositea-2.jpg';
import FabTerrace from '@/assets/images/fab-terrace.jpg';
import FabTerrace2 from '@/assets/images/fab-terrace-2.jpg';
import Theatre from '@/assets/images/theatre.jpg';
import TshirtMaking from '@/assets/images/tshirt-making.jpg';
import WsafClosingSpeech from '@/assets/images/wsaf-closing-speech.jpg';

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

      <div className="px-8 lg:text-lg max-w-5xl mx-auto">
        <div className="grid grid-cols-2 m-0 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-max mx-auto">
          <Image
            src={PiazzaStage}
            alt="Aerial photo of dance at the WSAF piazza stage"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={Curiositea}
            alt="The WSAF-mobile at Curiositea"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={Dance}
            alt="Dance at the WSAF piazza stage"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={TshirtMaking}
            alt="T-shirt making workship in the FAB"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={FabTerrace}
            alt="Aerial photo of WSAF at the FAB terrace"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={Art}
            alt="The WSAF art gallery"
            className="object-contain h-32 md:h-40 w-auto hidden sm:block"
          />
          <Image
            src={FabTerrace2}
            alt="The indoor WSAF FAB terrace"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={Theatre}
            alt="Theatre at WSAF"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={Curiositea2}
            alt="WSAF comedy night at Curiositea"
            className="object-contain h-32 md:h-40 w-auto"
          />
          <Image
            src={WsafClosingSpeech}
            alt="WSAF closing speech"
            className="object-contain h-32 md:h-40 w-auto hidden lg:block"
          />
        </div>
      </div>

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