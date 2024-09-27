import Image from 'next/image';
import HeroImage from '@/assets/hero.jpg';
import Logo from '@/assets/logo.png';

export default function Hero() {
  return (
    <header className="relative border-b-accent border-b-8 bg-accent">
      <Image
        src={HeroImage}
        alt="Aerial shot of the Warwick University piazza"
        placeholder="blur"
        className="absolute h-full object-cover"
        priority
      />
      <div className="p-6 sm:p-12 md:p-24 relative flex flex-wrap sm:flex-nowrap justify-center items-center">
        <Image
          src={Logo}
          alt="WSAF 2025 logo"
          placeholder="blur"
          className="my-6 mr-8 h-32 lg:h-36 w-auto object-contain drop-shadow-sm"
          priority
        />
        <div className="my-6 flex flex-col items-end text-right">
          <h1 className="text-left bg-primary font-bold py-2 px-4">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              WSAF 2025
            </span>
            <span className="block text-sm xs:text-xl lg:text-3xl">
              Warwick Student Arts Festival
            </span>
          </h1>
          {/*<span className="text-xs 2xs:text-md lg:text-lg pb-2 px-4 block bg-primary text-accent font-bold">
            <time dateTime="2024-06-08T10:00:00.000">Sat 8th</time> -{' '}
            <time dateTime="2024-06-10T22:00:00.000">Mon 10th June</time>
          </span>*/}
        </div>
      </div>
    </header>
  );
}
