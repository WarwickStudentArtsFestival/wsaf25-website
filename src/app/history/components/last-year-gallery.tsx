import Image from 'next/image';
import PiazzaStage from '@/assets/images/stage.jpg';
import Dance from '@/assets/images/dance.jpg';
import Curiositea from '@/assets/images/curiositea.jpg';
import Art from '@/assets/images/art.jpg';
import Curiositea2 from '@/assets/images/curiositea-2.jpg';
import FabTerrace from '@/assets/images/fab-terrace.jpg';
import FabTerrace2 from '@/assets/images/fab-terrace-2.jpg';
import Theatre from '@/assets/images/theatre.jpg';
import TshirtMaking from '@/assets/images/tshirt-making.jpg';
import WsafClosingSpeech from '@/assets/images/wsaf-closing-speech.jpg';

export default function LastYearGallery() {
  const images = [
    { src: PiazzaStage, alt: 'Aerial photo of dance at the WSAF piazza stage' },
    { src: Curiositea, alt: 'The WSAF-mobile at Curiositea' },
    { src: Dance, alt: 'Dance at the WSAF piazza stage' },
    { src: TshirtMaking, alt: 'T-shirt making workshop in the FAB' },
    { src: FabTerrace, alt: 'Aerial photo of WSAF at the FAB terrace' },
    { src: Art, alt: 'The WSAF art gallery' },
    { src: FabTerrace2, alt: 'The indoor WSAF FAB terrace' },
    { src: Theatre, alt: 'Theatre at WSAF' },
    { src: Curiositea2, alt: 'WSAF comedy night at Curiositea' },
    { src: WsafClosingSpeech, alt: 'WSAF closing speech' },
  ];

  return (
    <div className="grid grid-cols-3 max-w-6xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-4 w-full mx-auto px-4 lg:px-2">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex justify-center items-center ${
            index === 9 && 'hidden md:flex'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="object-contain w-full h-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[250px]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
