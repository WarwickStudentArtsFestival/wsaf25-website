import Link from 'next/link';
import { FaDiscord, FaEnvelope, FaGithub, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

type LinkItem = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  newTab?: boolean;
};

type SectionProps = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};

const FooterLink: React.FC<LinkItem & { children?: React.ReactNode }> = ({
  href,
  label,
  icon: Icon,
  children,
  newTab,
}) => (
  <li>
    <Link
      href={href}
      className="text-muted-foreground hover:text-slate-200"
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {Icon ? (
        <>
          <span className="sr-only">{label}</span>
          <Icon className="h-5 w-5" />
        </>
      ) : (
        children || label
      )}
    </Link>
  </li>
);

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-lg text-left text-yellow font-semibold mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const Footer: React.FC = () => {
  const links = {
    quick: [
      { href: '/perform', label: 'Perform or Exhibit' },
      { href: '/crew', label: 'Join the Crew' },
      { href: '/submit', label: 'Submit to WSAF' },
      { href: '/wpaint', label: 'W-Paint' },
    ],
    info: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/press', label: 'Press Kit' },
      { href: '/partners', label: 'Delivery Partners' },
      { href: '/faq', label: 'FAQs' },
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

  return (
    <footer className="bg-teal text-white w-full border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Section
            title={
              <span>
                <span className="text-white">WSAF</span> 2025
              </span>
            }
          >
            <p className="text-sm text-left pr-8 text-muted-foreground">
              Celebrating student creativity at the University of Warwick
            </p>
          </Section>

          <Section title="Quick Links">
            <ul className="space-y-3 text-left text-sm">
              {links.quick.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </Section>

          <Section title="Information">
            <ul className="space-y-3 text-left text-sm">
              {links.info.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </Section>

          <Section title="Follow Us">
            <ul className="flex align-center space-x-4">
              {links.social.map((social, index) => (
                <FooterLink key={index} {...social} />
              ))}
            </ul>
          </Section>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Warwick Student Arts Festival. All rights reserved.</p>
          <p className="mt-2 flex justify-center items-center gap-1">
            <FaGithub className="inline-block" />
            <a
              href="https://github.com/WarwickStudentArtsFestival/wsaf25-website"
              className="underline hover:text-slate-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
