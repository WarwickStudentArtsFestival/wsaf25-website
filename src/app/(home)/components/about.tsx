import { FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Performers from '@/assets/home/performers.jpg';
import Crew from '@/assets/home/crew.jpg';
import Guests from '@/assets/home/guests.jpg';
import HighlightCountdown from '@/app/(home)/components/highlight-countdown';
import InfoCard from './InfoCard';

export default function About() {
  const cards = [
    {
      image: Performers,
      imageAlt: 'Performing at WSAF 2024',
      title: 'Performers and Exhibitors',
      description: [
        "An arts festival could not take place without art! We're looking for your performances, creations and talents.",
        'Submissions for events are open until Friday Week 2 (2nd May).',
      ],
      footer: 'Find out more',
      link: '/perform',
      isExternalLink: false,
    },
    {
      image: Crew,
      imageAlt: 'WSAF 2024 crew debrief',
      title: 'Crew',
      description: [
        'WSAF is a fully student-led event, made by students for students. We need your help to make this possible!',
        'Join us in teams such as tech, stewarding, marketing and venue design which can match your commitment and availability.',
      ],
      footer: 'Find out more',
      link: '/crew',
      isExternalLink: false,
    },
    {
      image: Guests,
      imageAlt: 'WSAF 2024 art gallery',
      title: 'Guests',
      description: [
        "Don't want to perform or help out? You can still come on the day!",
        "More information about what's on will be provided closer to the festival. In the meantime, follow us on instagram to keep updated!",
      ],
      footer: 'Follow @wsaf25 on Instagram',
      link: 'https://www.instagram.com/wsaf25/',
      isExternalLink: true,
    },
  ];

  return (
    <section className="px-4 sm:px-8 mb-4">
      <HighlightedHeading text="What is WSAF?" />
      <h2 className="text-teal text-xl pt-2 sm:text-2xl font-semibold">
        The Warwick Student Arts Festival 2025
      </h2>
      <div className="max-w-screen-lg mx-auto p-4 mb-1">
        <span className="font-semibold">
          We&apos;re back for 2025, putting on a four-day, student-led showcase
          and celebration of the arts at Warwick.
        </span>
        <br />
        Join us during Week 8-9 for our free festival of performances,
        exhibitions, workshops and more.
      </div>

      <HighlightCountdown />

      <div className="flex gap-2 pt-2 justify-center mb-4">
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
          href="https://discord.gg/TuFwJX4GKM"
          target="_blank"
          className="flex items-center justify-center hover:scale-105"
        >
          <FaDiscord className="inline mr-0.5 mt-0.5" />
          Discord
        </a>
      </div>

      {/* <HighlightedHeading text="Can I get involved?" /> */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center text-left text-sm">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
