import {
  FiExternalLink,
  FiInstagram,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Performers from '@/assets/home/performers.jpg';
import Crew from '@/assets/home/crew.jpg';
import Guests from '@/assets/home/guests.jpg';

export default function About() {
  return (
    <section className="px-8 mb-4">
      <HighlightedHeading text="What is WSAF?"/>
      <h2 className="text-teal text-2xl font-semibold">The Warwick Student Arts Festival 2025</h2>
      <div className="max-w-screen-lg mx-auto px-2 mb-1">
        <span className="font-semibold">We're back for 2025, putting on a four-day, student-led showcase and celebration of the arts at Warwick.</span>
        <br/>Join us during Week 8-9 for our free festival of performances, exhibitions, workshops and more.
      </div>

      <div className="flex gap-2 justify-center mb-4">
        <a
          href="https://www.instagram.com/wsaf25/"
          target="_blank"
          className="flex items-center justify-center hover:scale-105"
        >
          <FiInstagram className="inline mr-0.5 mt-1"/>
          @wsaf25
        </a>
        <span className="font-light">•</span>
        <a
          href="/discord"
          target="_blank"
          className="flex items-center justify-center hover:scale-105"
        >
          <FaDiscord className="inline mr-0.5 mt-0.5"/>
          Discord
        </a>
      </div>

      <div className="flex gap-4 justify-center text-left text-sm">
        <article className="border border-slate-300 rounded-md overflow-hidden max-w-96">
          <Image src={Performers} alt="Performing at WSAF 2024" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Performers and Exhibitors</h3>
            <p>An arts festival could not take place without art! We're looking for your performances, creations and
              talents.</p>
          </div>
        </article>
        <article className="border border-slate-300 rounded-md overflow-hidden max-w-96">
          <Image src={Crew} alt="WSAF 2024 crew debrief" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Crew</h3>
            <p>WSAF is a fully student-led event, made by students for students. We need your help to make this
              possible!</p>
          </div>
        </article>
        <article className="border border-slate-300 rounded-md overflow-hidden max-w-96">
          <Image src={Guests} alt="WSAF 2024 art gallery" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Guests</h3>
            <p>Don't want to perform or help out? You can still come on the day!</p>
          </div>
        </article>
      </div>

      {/*<a
        href="https://submit.wsaf.org.uk/2025/cfp"
        className="inline-block bg-secondary px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105 mt-4"
        target="_blank"
      >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            Registration Form Now Open
          </span>
        <FiExternalLink className="inline-block mb-2 ml-2"/>
        <span className="text-sm block">Closes Friday 2nd May</span>
      </a>*/}
    </section>
  );
}
