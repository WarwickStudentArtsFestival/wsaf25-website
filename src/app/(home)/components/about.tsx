import {
  FiArrowRight,
  FiCalendar, FiChevronRight,
  FiExternalLink,
  FiInstagram,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Performers from '@/assets/home/performers.jpg';
import Crew from '@/assets/home/crew.jpg';
import Guests from '@/assets/home/guests.jpg';
import HighlightCountdown from '@/app/(home)/components/highlight-countdown';

export default function About() {
  return (
    <section className="px-8 mb-4">
      <HighlightedHeading text="What is WSAF?"/>
      <h2 className="text-teal text-2xl font-semibold">The Warwick Student Arts Festival 2025</h2>
      <div className="max-w-screen-lg mx-auto px-2 mb-1">
        <span className="font-semibold">We're back for 2025, putting on a four-day, student-led showcase and celebration of the arts at Warwick.</span>
        <br/>Join us during Week 8-9 for our free festival of performances, exhibitions, workshops and more.
      </div>


      <HighlightCountdown />

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
        <a href="/perform" className="border border-slate-300 rounded-md overflow-hidden max-w-96 hover:scale-105 transition duration-75 ease-in-out">
          <Image src={Performers} alt="Performing at WSAF 2024" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Performers and Exhibitors</h3>
            <p className="mb-2">An arts festival could not take place without art! We're looking for your performances, creations and
              talents.</p>
            <p>Submissions for events are open until Friday Week 2 (2nd May).</p>

            <p className="mt-4 text-black flex items-center"><FiArrowRight className="mr-1" />Find out more</p>
          </div>
        </a>
        <a href="/crew" className="border border-slate-300 rounded-md overflow-hidden max-w-96 hover:scale-105 transition duration-75 ease-in-out">
          <Image src={Crew} alt="WSAF 2024 crew debrief" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Crew</h3>
            <p className="mb-2">WSAF is a fully student-led event, made by students for students. We need your help to make this
              possible!</p>
            <p>Join us in teams such as tech, stewarding, marketing and venue design which can match your commitment and availability.</p>

            <p className="mt-4 text-black flex items-center"><FiArrowRight className="mr-1"/>Find out more</p>
          </div>
        </a>
        <a href="/instagram" target="_blank" className="border border-slate-300 rounded-md overflow-hidden max-w-96 hover:scale-105 transition duration-75 ease-in-out">
          <Image src={Guests} alt="WSAF 2024 art gallery" className="object-contain"/>
          <div className="p-4">
            <h3 className="text-teal text-xl font-semibold">Guests</h3>
            <p className="mb-2">Don't want to perform or help out? You can still come on the day!</p>
            <p>More information about what's on will be provided closer to the festival. In the meantime,
              follow us on <a href="/instagram" target="_blank" className="text-teal">instagram</a> to keep updated!</p>

            <p className="mt-4 text-black flex items-center"><FiArrowRight className="mr-1"/>Follow @wsaf25 on Instagram</p>
          </div>
        </a>
      </div>
    </section>
  );
}
