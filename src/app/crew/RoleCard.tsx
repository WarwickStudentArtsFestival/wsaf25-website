import Image, { StaticImageData } from 'next/image';

interface RoleCardProps {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string[];
  footer: string;
  link: string;
  isExternalLink?: boolean;
}

export default function RoleCard({
  image,
  imageAlt,
  title,
  description,
}: RoleCardProps) {
  return (
    <div className="border border-slate-300 rounded-md overflow-hidden w-full hover:scale-105 transition duration-75 ease-in-out flex flex-col h-auto sm:h-[28rem]">
      <div className="relative w-full h-48 sm:h-1/2">
        <Image
          src={image}
          alt={imageAlt}
          className="object-cover rounded-t-md"
          fill
        />
      </div>
      <div className="p-4 flex flex-col justify-start flex-grow">
        <h3 className="text-teal text-xl font-semibold mb-2">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
