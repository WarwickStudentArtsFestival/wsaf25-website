import { FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Performers from '@/assets/home/performers.jpg';
import Crew from '@/assets/home/crew.jpg';
import Guests from '@/assets/home/guests.jpg';
import InfoCard from './InfoCard';
import mainConfig from '@config/main-config';

export default function About() {
  const cards = [
    {
      image: Performers,
      imageAlt: 'Performing at WSAF 2024',
      title: 'Performers and Exhibitors',
      description: [
        "An arts festival could not take place without art! We're looking for your performances, creations and talents.",
        mainConfig.submissions.open
          ? `Submissions for events are open until ${mainConfig.submissions.closingDate}.`
          : `Submissions are now closed, but if you are still interested in performing please submit the form or contact us at @${mainConfig.socials.instagram} and we'll do our best to fit you in.`,
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
        'WSAF is a fully student-run event, made by students for students. We need your help to make this possible!',
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
      footer: `Follow @${mainConfig.socials.instagram} on Instagram`,
      link: `https://www.instagram.com/${mainConfig.socials.instagram}/`,
      isExternalLink: true,
    },
  ];

  return (
    <section className="px-4 my-4 sm:my-8 sm:px-8">
      <div className="mt-4">
        <HighlightedHeading text="What is WSAF?" />
      </div>
      <h2 className="text-teal text-xl pt-2 sm:text-2xl font-semibold">
        The Warwick Student Arts Festival {mainConfig.dates.year}
      </h2>
      <div className="max-w-screen-lg mx-auto p-4 pb-0 mb-1">
        <span className="font-semibold">
          We&apos;re back for {mainConfig.dates.year}, putting on a fully
          student-run, free {mainConfig.dates.durationDaysText}-day showcase and
          celebration of the arts at Warwick.
        </span>
        <br />
        Join us during {mainConfig.dates.week} for our free festival of
        performances, exhibitions, workshops and more.
      </div>

      <div className="flex gap-2 justify-center">
        <a
          href={`https://www.instagram.com/${mainConfig.socials.instagram}`}
          target="_blank"
          className="flex items-center justify-center hover:scale-105"
        >
          <FiInstagram className="inline mr-0.5 mt-1" />
          {mainConfig.socials.instagram}
        </a>
        <span className="font-light">•</span>
        <a
          href={mainConfig.socials.discordInvite}
          target="_blank"
          className="flex items-center justify-center hover:scale-105"
        >
          <FaDiscord className="inline mr-0.5 mt-0.5" />
          Discord
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-2 justify-center text-left text-sm">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
