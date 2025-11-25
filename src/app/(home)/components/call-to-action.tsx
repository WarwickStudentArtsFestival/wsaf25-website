import Link from 'next/link';
import homepageConfig from '@config/homepage-config';
import { FaDiscord } from 'react-icons/fa';
import mainConfig from '@config/main-config';

export default function CallToAction() {
  switch (homepageConfig.about.callToAction.type) {
    case 'discord':
      return (
        <Link
          href={mainConfig.socials.discordInvite}
          target="_blank"
          className="inline-block mb-1 bg-purple px-6 py-4 rounded-md drop-shadow-xs hover:scale-105 text-white mx-2 text-center w-full max-w-md"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="flex items-center gap-2 text-white text-xl uppercase font-bold">
              <FaDiscord className="text-2xl" />
              Join the Discord
            </p>
            <p className="text-sm text-slate-300 leading-4 text-center">
              Join our Discord server to keep up to date and find out
              what&apos;s going on at WSAF.
            </p>
          </div>
        </Link>
      );

    default:
      return null;
  }
}
