import Image from 'next/image';
import HeroImage from '@/assets/hero.jpg';
import Logo from '@/assets/logo.png';
import Link from 'next/link';

export default function PageHeader({ borderClass }: { borderClass?: string }) {
  return (
    <header>
      <div
        className={`relative border-b-8 bg-yellow mb-2 ${borderClass || 'border-b-yellow'}`}
      >
        <Image
          src={HeroImage}
          alt="Aerial shot of the Warwick University piazza"
          placeholder="blur"
          className="absolute h-full object-cover"
          priority
        />

        <div className="p-6 relative flex justify-center items-center">
          <Link
            href="/"
            className="hover:scale-105 flex flex-wrap sm:flex-nowrap justify-center items-center"
          >
            <Image
              src={Logo}
              alt="WSAF 2025 logo"
              placeholder="blur"
              className="my-2 mr-2 sm:mr-6 h-16 sm:h-24 w-auto object-contain drop-shadow-xs"
              priority
            />
            <div className="my-2 flex flex-col items-end text-right mr-2 sm:mr-6">
              <h2 className="text-left bg-teal font-bold py-1 sm:py-2 px-2 sm:px-4 text-white m-0">
                <span className="block text-2xl sm:text-4xl">
                  WSAF <span className="text-yellow">2025</span>
                </span>
                <span className="block text-sm sm:text-xl normal-case -mt-1 sm:mt-0">
                  Warwick Student Arts Festival
                </span>
              </h2>
              <span className="bg-teal text-xs sm:text-sm pb-1 px-2 sm:px-3 -mt-1 sm:-mt-2 block bg-primary text-yellow font-semibold">
                <time dateTime="2024-06-08T10:00:00.000">Fri 13th</time> -{' '}
                <time dateTime="2024-06-10T22:00:00.000">Mon 16th June</time>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
