import { StaticImageData } from 'next/image';
import Image from 'next/image';

export type IdCardProps = {
  name: string;
  description?: string;
  role?: string;
  pronouns?: string;
  image?: StaticImageData;
  isBothOrganiserAndVolunteer?: boolean;
};

export default function IdCard({
  name,
  description,
  emailDescription,
  role,
  pronouns,
  image,
}: {
  name: string;
  description?: string;
  emailDescription?: boolean;
  role?: string;
  pronouns?: string;
  image?: StaticImageData;
}) {
  return (
    <article className="rounded-xl m-2 overflow-hidden w-40 sm:w-52 flex flex-col bg-accent">
      <header className="bg-secondary h-6 sm:h-8 flex justify-center items-center">
        <div className="rounded-2xl w-12 h-2 sm:h-3 mt-1 bg-accent" />
      </header>
      <div className="flex-grow flex flex-col px-4 py-1 sm:py-2 text-black">
        {image && (
          <Image
            src={image}
            alt={`Image of ${name}`}
            className="mx-auto mb-2 w-24 sm:w-32 h-auto"
            placeholder="blur"
          />
        )}
        <h3 className="text-lg sm:text-xl font-bold leading-tight">{name}</h3>
        {pronouns && <p className="text-2xs font-bold -mt-1">{pronouns}</p>}
        {emailDescription && (
          <span className="block text-xs sm:text-sm leading-tight">
            Interested? Email us at{' '}
            <a
              href="mailto:info@wsaf.org.uk"
              target="_blank"
              className="text-secondary"
            >
              info@wsaf.org.uk
            </a>
          </span>
        )}
        {description && (
          <span className="block text-xs sm:text-sm leading-tight whitespace-pre-wrap">
            {description}
          </span>
        )}
      </div>
      {role && (
        <footer className="bg-secondary text-sm sm:text-lg leading-tight sm:leading-tight uppercase font-bold pt-1 pb-1 sm:pb-2 px-2 mt-auto min-h-12 sm:min-h-14 flex justify-center items-center whitespace-pre-wrap">
          {role}
        </footer>
      )}
    </article>
  );
}
