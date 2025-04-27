import Wsaf2014Scheduling from '@/assets/history/wsaf-2014-scheduling.jpg';
import Wsaf2014OutdoorPianos from '@/assets/history/wsaf-2014-outdoor-pianos.jpg';
import Wsaf2014Stand from '@/assets/history/wsaf-2014-stand.jpg';
import Wsaf2014Trampolining from '@/assets/history/wsaf-2014-trampolining.jpg';
import Wsaf2014BigBand from '@/assets/history/wsaf-2014-big-band.jpg';
import Wsaf2014MusicExtravaganza from '@/assets/history/wsaf-2014-music-extravanganza.jpg';
import Wsaf2014Piazza from '@/assets/history/wsaf-2014-piazza.jpg';
import Wsaf2015Scheduling from '@/assets/history/wsaf-2015-scheduling.jpg';
import Wsaf2015Banners from '@/assets/history/wsaf-2015-banners.jpg';
import Wsaf2015Publicity from '@/assets/history/wsaf-2015-publicity.jpg';
import Wsaf2015Trampolining from '@/assets/history/wsaf-2015-trampolining.jpg';
import Wsaf2015Painting from '@/assets/history/wsaf-2015-painting.jpg';
import Wsaf2015Stand from '@/assets/history/wsaf-2015-stand.jpg';
import Image, { StaticImageData } from 'next/image';

const images: { name: string; image: StaticImageData; url: string }[] = [
  {
    name: '2014 Event Scheduling',
    image: Wsaf2014Scheduling,
    url: 'https://www.facebook.com/photo/?fbid=311370942349184&set=a.289147141238231',
  },
  {
    name: '2014 Outdoor Pianos',
    image: Wsaf2014OutdoorPianos,
    url: 'https://www.facebook.com/photo/?fbid=328564640629814&set=a.287594771393468',
  },
  {
    name: '2014 Stand',
    image: Wsaf2014Stand,
    url: 'https://www.facebook.com/photo/?fbid=329263747226570&set=a.287594771393468',
  },
  {
    name: '2014 Trampolining',
    image: Wsaf2014Trampolining,
    url: 'https://www.facebook.com/photo/?fbid=329627803856831&set=a.287594771393468',
  },
  {
    name: '2014 Big Band',
    image: Wsaf2014BigBand,
    url: 'https://www.facebook.com/photo/?fbid=329682400518038&set=a.287594771393468',
  },
  {
    name: '2014 Music Extravanganza',
    image: Wsaf2014MusicExtravaganza,
    url: 'https://www.facebook.com/photo/?fbid=330117523807859&set=a.287594771393468',
  },
  {
    name: '2014 Piazza',
    image: Wsaf2014Piazza,
    url: 'https://www.facebook.com/warwickstudentartsfest/posts/pfbid0QBC4CUUno9AKrd3TDzigHAY5TXcHgzDbWbRmLnLhgCxzVfdWP8id5opL3dd9EC1pl',
  },
  {
    name: '2015 Scheduling',
    image: Wsaf2015Scheduling,
    url: 'https://www.facebook.com/photo/?fbid=471717282981215&set=a.287594771393468',
  },
  {
    name: '2015 Banners',
    image: Wsaf2015Banners,
    url: 'https://www.facebook.com/photo/?fbid=486728158146794&set=a.287594771393468',
  },
  {
    name: '2015 Publicity',
    image: Wsaf2015Publicity,
    url: 'https://www.facebook.com/photo/?fbid=492243647595245&set=a.287594771393468',
  },
  {
    name: '2015 Trampolining',
    image: Wsaf2015Trampolining,
    url: 'https://www.facebook.com/photo/?fbid=495688647250745&set=a.287594771393468',
  },
  {
    name: '2015 Painting',
    image: Wsaf2015Painting,
    url: 'https://www.facebook.com/photo/?fbid=495775563908720&set=a.287594771393468',
  },
  {
    name: '2015 Stand',
    image: Wsaf2015Stand,
    url: 'https://www.facebook.com/photo/?fbid=495940720558871&set=a.287594771393468',
  },
];

export default function Gallery() {
  return (
    <div className="my-4 flex gap-4 flex-wrap justify-center">
      {images.map((image) => (
        <figure key={image.name}>
          <Image
            src={image.image}
            alt={image.name}
            className="object-contain h-44 w-auto"
          />
          <figcaption className="text-xs mt-0.5">
            <a
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              {image.name}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
