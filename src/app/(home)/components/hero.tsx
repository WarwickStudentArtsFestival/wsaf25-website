import Image from 'next/image';
import HeroImage from '@/assets/hero.jpg';
import Logo from '@/assets/logo.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-4 text-white">
      <div className="relative z-10">
        <div className="mt-12 m-6 flex flex-wrap sm:flex-nowrap justify-center items-center">
          <Image
            src={Logo}
            alt="WSAF 2025 logo"
            className="my-6 mr-8 h-32 lg:h-36 w-auto object-contain drop-shadow-xs"
            priority
          />
          <div className="my-6 flex flex-col items-end text-right">
            <h1 className="text-left bg-teal font-bold py-2 px-4">
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            WSAF 2025
          </span>
          <span className="block text-sm xs:text-xl lg:text-3xl">
            Warwick Student Arts Festival
          </span>
            </h1>
            <span className="text-xs 2xs:text-md lg:text-lg pb-2 px-4 block bg-teal text-yellow font-bold">
          <time dateTime="2025-06-13T10:00:00.000">Fri 13th</time> -{' '}
              <time dateTime="2025-06-16T22:00:00.000">Mon 16th June</time>
        </span>
          </div>
        </div>

        <iframe
          className="mx-auto border-yellow border-8 w-[32rem] h-[18rem] bg-black"
          src="https://www.youtube.com/embed/31Wp-S3dqGE&autoplay=1&mute=1"
          title="WSAF Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="absolute top-0 bottom-32 w-full border-b-yellow border-b-8 z-0">
        <Image
          src={HeroImage}
          alt="WSAF 2024 Ceilidh"
          placeholder="blur"
          className="object-cover w-full h-full"
          priority
        />
      </div>

    </section>
  );
}
