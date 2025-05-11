import { FaDiscord, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ComponentType } from 'react';

export type LinkItem = {
  href: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
  newTab?: boolean;
};

export type FooterLinks = {
  quick: LinkItem[];
  info: LinkItem[];
  social: LinkItem[];
};

const footerData: FooterLinks = {
  quick: [
    { href: '/perform', label: 'Perform or Exhibit' },
    { href: '/crew', label: 'Join the Crew' },
    { href: '/submit', label: 'Submit to WSAF' },
    { href: '/wpaint', label: 'W-Paint' },
  ],
  info: [
    { href: '/history', label: 'History' },
    { href: '/press', label: 'Press Kit' },
    { href: '/faq', label: 'FAQs' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
  social: [
    {
      href: 'https://www.instagram.com/wsaf25/',
      label: 'Instagram',
      icon: AiFillInstagram,
      newTab: true,
    },
    {
      href: 'https://discord.gg/TuFwJX4GKM',
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
      href: 'https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A',
      label: 'YouTube',
      icon: FaYoutube,
      newTab: true,
    },
  ],
};

export default footerData;
