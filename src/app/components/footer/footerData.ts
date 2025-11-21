import { FaDiscord, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ComponentType } from 'react';
import mainConfig from '@config/main-config';
import barMenuConfig from '@config/bar-menu-config';
import eventsConfig from '@config/events-config';

export type LinkItem = {
  href: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
  newTab?: boolean;
  hidden?: boolean;
};

export type FooterLinks = {
  quick: LinkItem[];
  info: LinkItem[];
  social: LinkItem[];
};

const footerData: FooterLinks = {
  quick: [
    { href: '/events', label: 'Events', hidden: !eventsConfig.enabled },
    { href: '/venues', label: 'Venues', hidden: !eventsConfig.enabled },
    { href: '/crew', label: 'Join the Crew' },
    { href: '/perform', label: 'Perform or Exhibit' },
    {
      href: '/bar',
      label: 'Bar',
      hidden: !barMenuConfig.enabled || !barMenuConfig.showInFooter,
    },
  ],
  info: [
    { href: '/history', label: 'History' },
    { href: '/press', label: 'Press Kit' },
    { href: '/faq', label: 'FAQs' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
  social: [
    {
      href: `https://www.instagram.com/${mainConfig.socials.instagram}/`,
      label: 'Instagram',
      icon: AiFillInstagram,
      newTab: true,
    },
    {
      href: mainConfig.socials.discordInvite,
      label: 'Discord',
      icon: FaDiscord,
      newTab: true,
    },
    {
      href: 'mailto:info@wsaf.org.uk',
      label: 'Email',
      icon: FaEnvelope,
      newTab: true,
    },
    {
      href: `https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`,
      label: 'YouTube',
      icon: FaYoutube,
      newTab: true,
    },
  ],
};

export default footerData;
