import {
  FiArrowRight,
  FiBookOpen,
  FiExternalLink,
  FiInstagram,
  FiLink,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
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

export default function About() {
  return (
    <section className="-top-8 relative">
      <h2>What is WSAF?</h2>
      <div className="px-8 lg:text-lg max-w-5xl mx-auto">
        <p className="font-bold mb-2">
          Warwick Student Arts Festival (WSAF) is a showcase and celebration of
          all aspects of the arts at Warwick that takes place in Term 3.
        </p>
        <p>
          Every day will feature a morning-to-evening programme of events
          including theatre, dance, music, film, literature, comedy and art held
          across the entirety of campus. If you have a show, some art, a dance,
          a poem or anything in-between that you want to show, we&#39;d love to
          see you there!
        </p>

        <a
          href="https://submit.wsaf.org.uk/2025/cfp"
          className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mt-4"
          target="_blank"
        >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            Registration Form Now Open
          </span>
          <FiExternalLink className="inline-block mb-2 ml-2" />
          <span className="text-sm block">Closes Friday 2nd May</span>
        </a>

        <p className="flex gap-2 justify-center mt-2">
          <a
            href="https://www.instagram.com/wsaf25/"
            target="_blank"
            className="flex items-center justify-center hover:scale-105"
          >
            <FiInstagram className="inline mr-0.5 mt-1" />
            @wsaf25
          </a>
          <span className="font-light">•</span>
          <a
            href="/discord"
            target="_blank"
            className="flex items-center justify-center hover:scale-105"
          >
            <FaDiscord className="inline mr-0.5 mt-0.5" />
            Discord
          </a>
        </p>
      </div>
    </section>
  );
}
