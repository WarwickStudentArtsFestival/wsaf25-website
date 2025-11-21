import { FaGithub } from 'react-icons/fa';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import footerData from './footerData';
import DeliveryPartners from '@/app/components/footer/delivery-partners';
import mainConfig from '@config/main-config';
import Link from 'next/link';
import PaintBrush from '@/assets/icons/paintbrush.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-teal z-30 text-white w-full border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <FooterSection
            title={
              <span>
                <span className="text-white">WSAF</span> {mainConfig.dates.year}
              </span>
            }
          >
            <p className="text-sm text-left pr-8 text-muted-foreground">
              Celebrating student creativity at the University of Warwick
            </p>

            <div className="text-left">
              <Link
                href="/wpaint"
                className="inline-flex items-center gap-2 hover:underline uppercase text-black bg-yellow px-2 py-1 mt-2"
              >
                <div className="font-bold">W-Paint</div>
                <Image
                  src={PaintBrush}
                  alt="Paint brush icon"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-3 text-left text-sm">
              {footerData.quick
                .filter((link) => !link.hidden)
                .map((link, index) => (
                  <FooterLink key={index} {...link} />
                ))}
            </ul>
          </FooterSection>

          <FooterSection title="Information">
            <ul className="space-y-3 text-left text-sm">
              {footerData.info
                .filter((link) => !link.hidden)
                .map((link, index) => (
                  <FooterLink key={index} {...link} />
                ))}
            </ul>
          </FooterSection>

          <div className="space-y-7">
            <FooterSection title="Follow Us">
              <ul className="flex align-center space-x-4">
                {footerData.social
                  .filter((link) => !link.hidden)
                  .map((social, index) => (
                    <FooterLink key={index} {...social} />
                  ))}
              </ul>
            </FooterSection>

            <FooterSection title="Delivery Partners">
              <DeliveryPartners />
            </FooterSection>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm">
          <p>
            © {mainConfig.dates.year} Warwick Student Arts Festival. All rights
            reserved.
          </p>
          <p className="mt-2 flex justify-center items-center gap-1">
            <FaGithub className="inline-block" />
            <a
              href={mainConfig.githubUrl}
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
