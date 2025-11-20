import Image, { StaticImageData } from 'next/image';
import PlaceholderImage from '@/assets/team/placeholder.jpg';

export type IdCardProps = {
  name: string;
  year?: string;
  course?: string;
  role?: string;
  pronouns?: string;
  image?: StaticImageData;
  isBothOrganiserAndVolunteer?: boolean;
};

export default function IdCard({
  name,
  year,
  course,
  emailDescription,
  role,
  image = PlaceholderImage,
}: {
  name: string;
  year?: string;
  course?: string;
  emailDescription?: boolean;
  role?: string;
  image?: StaticImageData;
}) {
  return (
    <article className="rounded-xl border text-left border-slate-300 overflow-hidden flex flex-col">
      <Image
        src={image}
        alt={`Image of ${name}`}
        className="object-fill w-full relative"
        width={500}
        height={600}
        placeholder="blur"
      />

      <div className="flex flex-col p-2 text-slate-600 flex-1 overflow-hidden">
        <h3 className="text-base sm:text-lg font-bold leading-tight text-teal">
          {name}
        </h3>
        <h3 className="text-xs font-bold leading-tight text-black">{role}</h3>

        {emailDescription && (
          <span className="text-xs sm:text-sm leading-tight mt-1">
            Interested? Email us at{' '}
            <a
              href="mailto:info@wsaf.org.uk"
              target="_blank"
              className="bg-secondary"
            >
              info@wsaf.org.uk
            </a>
          </span>
        )}
        {course && (
          <span className="block text-xs sm:text-sm leading-tight whitespace-pre-wrap mt-1">
            {course}
          </span>
        )}
        {year && (
          <span className="block text-2xs sm:text-xs leading-tight whitespace-pre-wrap mt-0.5">
            {year}
          </span>
        )}
      </div>
    </article>
  );
}
