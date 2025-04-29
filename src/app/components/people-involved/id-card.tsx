import Image, { StaticImageData } from 'next/image';

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
  course,
  emailDescription,
  role,
  pronouns,
  image,
}: {
  name: string;
  year?: string;
  course?: string;
  emailDescription?: boolean;
  role?: string;
  pronouns?: string;
  image?: StaticImageData;
}) {
  return (
    <article className="rounded-xl border text-left border-slate-300 m-2 overflow-hidden w-36 sm:w-44 flex flex-col h-80">
      {image && (
        <div className="relative w-full h-2/3">
          <Image
            src={image}
            alt={`Image of ${name}`}
            className="object-cover"
            fill
            placeholder="blur"
          />
        </div>
      )}
      <div className="flex flex-col p-2 text-slate-600 flex-1 overflow-hidden">
        <h3 className="text-base sm:text-lg font-bold leading-tight text-teal">
          {name}
        </h3>
        <h3 className="text-xs font-bold leading-tight text-black">{role}</h3>
        {pronouns && <p className="text-2xs font-bold -mt-1">{pronouns}</p>}
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
        {/* {year && (
          <span className="block text-xs sm:text-sm leading-tight whitespace-pre-wrap mt-auto">
            {year}
          </span>
        )} */}
      </div>
    </article>
  );
}
