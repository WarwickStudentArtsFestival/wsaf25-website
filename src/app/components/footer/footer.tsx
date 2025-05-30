import { FaGithub } from 'react-icons/fa';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import footerData from './footerData';

export default function Footer() {
  return (
    <footer className="bg-teal z-30 text-white w-full border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <FooterSection
            title={
              <span>
                <span className="text-white">WSAF</span> 2025
              </span>
            }
          >
            <p className="text-sm text-left pr-8 text-muted-foreground">
              Celebrating student creativity at the University of Warwick
            </p>

            {/* W-Paint Link TODO: fix styles */}
            {/* <Link
              href="/wpaint"
              className="flex items-center mx-auto gap-2 rounded hover:underline uppercase text-black bg-yellow"
            >
              <div className="font-bold">W-Paint</div>
              <Image
                src={PaintBrush}
                alt="Paint brush icon"
                width={25}
                height={25}
              />
            </Link> */}
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-3 text-left text-sm">
              {footerData.quick.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Information">
            <ul className="space-y-3 text-left text-sm">
              {footerData.info.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Follow Us">
            <ul className="flex align-center space-x-4">
              {footerData.social.map((social, index) => (
                <FooterLink key={index} {...social} />
              ))}
            </ul>
          </FooterSection>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm">
          <p>© 2025 Warwick Student Arts Festival. All rights reserved.</p>
          <p className="mt-2 flex justify-center items-center gap-1">
            <FaGithub className="inline-block" />
            <a
              href="https://github.com/WarwickStudentArtsFestival/wsaf25-website"
              className="hover:underline"
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
}
