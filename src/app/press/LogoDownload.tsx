import Image, { StaticImageData } from 'next/image';

export function LogoDownload({
  image,
  name,
  size,
  style,
  href,
}: {
  image: StaticImageData;
  name: string;
  size?: string;
  style?: string;
  href?: string;
}) {
  return (
    <div className={`${size || 'max-w-96 w-56'} flex-grow`}>
      <p className="text-xs mb-1 text-slate-800">{name}</p>
      <a
        href={href || image.src}
        target="_blank"
        download={!href}
        className={`block hover:scale-105 transition duration-100 ${style}`}
      >
        <Image src={image} placeholder="blur" alt={name} />
      </a>
    </div>
  );
}
