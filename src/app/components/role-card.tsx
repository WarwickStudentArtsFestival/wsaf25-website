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
    <div className="border text-left border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={imageAlt}
          className="object-cover rounded-t-md"
          fill
        />
      </div>
      <div className="p-4 flex flex-col h-fit overflow-y-auto">
        <h3 className="text-teal text-xl font-semibold mb-2">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm mb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
