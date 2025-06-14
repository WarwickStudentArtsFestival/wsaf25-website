import MainStage from '@/assets/venues/main-stage.png';
import FabGallery from '@/assets/venues/fab-gallery.jpg';
import Avon from '@/assets/venues/avon.jpg';
import Fab1 from '@/assets/venues/fab1.jpg';
import Fab2 from '@/assets/venues/fab2.jpg';
import Rehearsal from '@/assets/venues/rehersal.jpg';
import Terrace from '@/assets/venues/terrace.jpg';
import Placeholder from '@/assets/hero.jpg';
import Fab106 from '@/assets/venues/fab106.jpg';
import Fusion from '@/assets/venues/fusion.jpg';
import { AdditionalVenueData } from '@/lib/venues';

// Mapping from venue GUID to additional data
const venues: Record<string, AdditionalVenueData> = {
  // Millburn G55
  '038ea818-8093-57c0-8bd8-1ca2927b488c': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c889d421e6f5928c0d3d2?projectId=warwick',
    image: Placeholder,
    imageAlt: 'Placeholder',
    roomLocation: 'Millburn G55',
    slug: 'Millburn-g55',
    filterBitFieldIndex: 10,
  },

  // Benefactors Place Stage
  'd629fdd8-158b-52e9-87a3-2491c02d2bb2': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c885f421e6f5928c0c7db?projectId=warwick',
    image: MainStage,
    imageAlt: 'Picture of the WSAF 2024 Main Stage',
    roomLocation: 'Benefactors Place',
    slug: 'benefactors-stage',
    filterBitFieldIndex: 1,
  },

  // The Other FAB Theatre - FAB0.19
  '6839bb4f-d6fc-56ce-bbc6-e77f76517653': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb67?projectId=warwick',
    image: Fab1,
    imageAlt: 'Image of a performance in a FAB theatre',
    roomLocation: 'FAB0.19',
    slug: 'other-fab-theatre',
    filterBitFieldIndex: 2,
  },

  // FAB Theatre - FAB0.20
  '7b99d5b1-6f27-5b1d-8222-219e553e65ff': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb6a?projectId=warwick',
    image: Fab2,
    imageAlt: 'Image of a performance in a FAB theatre',
    roomLocation: 'FAB0.20',
    slug: 'fab-theatre',
    filterBitFieldIndex: 3,
  },

  // FAB Rehearsal Rooms (0.16, 0.18)
  '80629533-8164-5bcd-b21f-2874991078c2': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8961421e6f5928c0fb6d?projectId=warwick',
    image: Rehearsal,
    imageAlt: 'FAB Rehearsal Rooms (0.16, 0.18)',
    roomLocation: 'FAB 0.16 & 0.18',
    slug: 'fab-rehearsal-rooms',
    filterBitFieldIndex: 4,
  },

  // FAB Terrace
  'fa0c1623-0556-5ee1-9768-546e34ee897c': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c896d421e6f5928c0fdeb?projectId=warwick',
    image: Terrace,
    imageAlt: 'Drone Shot of FAB terrace',
    roomLocation: 'FAB Terrace',
    slug: 'fab-terrace',
    filterBitFieldIndex: 5,
  },

  // FAB Cinema
  '825706ae-0ef1-501b-a4a6-ca7026e2de75': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c896e421e6f5928c0fe27?projectId=warwick',
    image: Rehearsal,
    imageAlt: 'Image of FAB Cinema',
    roomLocation: 'FAB0.21',
    slug: 'fab-cinema',
    filterBitFieldIndex: 6,
  },

  // FAB Art Gallery
  'a818f296-8e34-5ee2-bd5a-728b35144d5d': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8962421e6f5928c0fbcb?projectId=warwick',
    image: FabGallery,
    imageAlt: 'Picture of FAB Art Gallery',
    roomLocation: 'TBD',
    slug: 'fab-art-gallery',
    filterBitFieldIndex: 7,
  },

  // Avon Drama Studio
  '3bdb05f9-015d-5e09-9a68-c1d09bbfd273': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8868421e6f5928c0c98b?projectId=warwick',
    image: Avon,
    imageAlt:
      'Picture of a performance in a room that looks like Avon Drama Studio',
    roomLocation: 'Avon Drama Studio',
    slug: 'avon-drama-studio',
    filterBitFieldIndex: 8,
  },

  // The Graduate
  '01cbe95d-0b59-58a6-a7f2-3e2365e88a03': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c889c421e6f5928c0d3a7?projectId=warwick',
    image: Placeholder,
    imageAlt:
      'Picture of a performance in a room that looks like Avon Drama Studio',
    roomLocation: 'The Graduate',
    slug: 'the-graduate',
    filterBitFieldIndex: 9,
  },

  // FAB 1.06
  'ff238428-4491-53a1-9a22-77fd90d978e9': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/623c8964421e6f5928c0fc0f?projectId=warwick',
    image: Fab106,
    imageAlt: 'Picture of FAB 1.06',
    roomLocation: 'FAB 1.06',
    slug: 'fab-106',
    filterBitFieldIndex: 10,
  },

  // Fusion Bar
  '17d2a90e-3558-5d31-b12b-d18b62317790': {
    mapUrl:
      'https://campus.warwick.ac.uk/search/66167610d8dbf518cbed2bfb?projectId=warwick',
    image: Fusion,
    imageAlt: 'Picture of Fusion bar',
    roomLocation: '1st Floor - Rootes Building',
    slug: 'fusion',
    filterBitFieldIndex: 11,
  },
};

export default venues;
