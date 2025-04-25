import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';

interface LinkWrapperProps {
  children: ReactNode;
}

interface InfoCardProps {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string[];
  footer: string;
  link: string;
  isExternalLink: boolean;
}

export default function InfoCard({
  image,
  imageAlt,
  title,
  description,
  footer,
  link,
  isExternalLink = false,
}: InfoCardProps) {
  const LinkWrapper = ({ children }: LinkWrapperProps) => {
    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-300 rounded-md overflow-hidden w-full md:max-w-96 hover:scale-105 transition duration-75 ease-in-out"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          href={link}
          className="border border-slate-300 rounded-md overflow-hidden w-full md:max-w-96 hover:scale-105 transition duration-75 ease-in-out"
        >
          {children}
        </Link>
      );
    }
  };

  return (
    <LinkWrapper>
      <Image src={image} alt={imageAlt} className="object-contain w-full" />
      <div className="p-4">
        <h3 className="text-teal text-xl font-semibold">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className={index === 0 ? 'mb-2' : ''}>
            {paragraph}
          </p>
        ))}
        <p className="mt-4 text-black flex items-center">
          <FiArrowRight className="mr-1" />
          {footer}
        </p>
      </div>
    </LinkWrapper>
  );
}
