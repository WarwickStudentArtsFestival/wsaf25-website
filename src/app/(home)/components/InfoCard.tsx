import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface InfoCardProps {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string[];
  footer: string;
  link: string;
  isExternalLink?: boolean;
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
  const cardClasses =
    'border border-slate-300 rounded-md overflow-hidden w-full md:max-w-96 hover:scale-105 transition duration-75 ease-in-out';

  const cardContent = (
    <>
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
    </>
  );

  return isExternalLink ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {cardContent}
    </a>
  ) : (
    <Link href={link} className={cardClasses}>
      {cardContent}
    </Link>
  );
}
