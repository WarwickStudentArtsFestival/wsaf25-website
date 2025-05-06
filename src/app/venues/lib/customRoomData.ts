import MainStage from '@/assets/venues/main-stage.png';
import FabGallery from '@/assets/venues/fab-gallery.jpg';
import Avon from '@/assets/venues/avon.jpg';
import Fab1 from '@/assets/venues/fab1.jpg';
import Fab2 from '@/assets/venues/fab2.jpg';
// import Cinema from '@/assets/venues/fab2.jpg';
import Rehersal from '@/assets/venues/rehersal.jpg';
import Terrace from '@/assets/venues/terrace.jpg';
import { StaticImageData } from 'next/image';

type CustomRoomData = {
  imageAlt: string;
  mapUrl: string;
  image: StaticImageData;
  roomLocation: string;
};

export const customRoomData: Record<number, CustomRoomData> = {
  // Benefactors Place Stage
  1: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c885f421e6f5928c0c7db?projectId=warwick',
    image: MainStage,
    imageAlt: 'Picture of the WSAF 2024 Main Stage',
    roomLocation: 'Benefactors Place',
  },
  // The Other FAB Theatre - FAB0.19
  3: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb67?projectId=warwick',
    image: Fab1,
    imageAlt: 'Image of a performance in a FAB theatre',
    roomLocation: 'FAB0.19',
  },
  // FAB Theatre - FAB0.20
  4: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb6a?projectId=warwick',
    image: Fab2,
    imageAlt: 'Image of a performance in a FAB theatre',
    roomLocation: 'FAB0.20',
  },
  // FAB Rehearsal Rooms (0.16, 0.18)
  7: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb6d?projectId=warwick',
    image: Rehersal,
    imageAlt: 'FAB Rehearsal Rooms (0.16, 0.18)',
    roomLocation: 'FAB 0.16 & 0.18',
  },
  // FAB Terrace
  8: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c896d421e6f5928c0fdeb?projectId=warwick',
    image: Terrace,
    imageAlt: 'Drone Shot of FAB terrace',
    roomLocation: 'FAB Terrace',
  },
  // FAB Cinema
  //   9: {
  //     mapUrl:
  //       'https://campus.warwick.ac.uk/search/623c896e421e6f5928c0fe27?projectId=warwick',
  //     image: Cinema,
  //     imageAlt: 'Image of FAB Cinema',
  //   },
  // FAB Art Gallery
  10: {
    mapUrl: '',
    image: FabGallery,
    imageAlt: 'Picture of FAB Art Gallery',
    roomLocation: 'Unknown',
  },
  // Avon Drama Studio
  11: {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8868421e6f5928c0c98b?projectId=warwick',
    image: Avon,
    imageAlt:
      'Picture of a performance in a room that looks like Avon Drama Studio',
    roomLocation: 'Avon Drama Studio',
  },
  // The Graduate
  //   12: {
  //     mapUrl:
  //       'https://campus.warwick.ac.uk/search/623c889c421e6f5928c0d3a7?projectId=warwick',
  //     image: Avon,
  //     imageAlt:
  //       'Picture of a performance in a room that looks like Avon Drama Studio',
  //   },
};
