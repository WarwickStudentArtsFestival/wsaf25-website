import MainStage from '@/assets/venues/main-stage.png';
import FabGallery from '@/assets/venues/fab-gallery.jpg';
import Avon from '@/assets/venues/avon.jpg';
import Fab1 from '@/assets/venues/fab1.jpg';
import Fab2 from '@/assets/venues/fab2.jpg';
import Cinema from '@/assets/venues/fab2.jpg';
import Rehearsal from '@/assets/venues/rehersal.jpg';
import Terrace from '@/assets/venues/terrace.jpg';
import { AdditionalVenueData } from '@/lib/venues';

// Mapping from venue GUID to additional data
const venues: Record<string, AdditionalVenueData> = {
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
    image: Cinema,
    imageAlt: 'Image of FAB Cinema',
    roomLocation: 'Unknown',
    slug: 'fab-cinema',
    filterBitFieldIndex: 6,
  },

  // FAB Art Gallery
  'a818f296-8e34-5ee2-bd5a-728b35144d5d': {
    mapUrl: '',
    image: FabGallery,
    imageAlt: 'Picture of FAB Art Gallery',
    roomLocation: 'Unknown',
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
    image: Avon,
    imageAlt:
      'Picture of a performance in a room that looks like Avon Drama Studio',
    roomLocation: 'The Graduate',
    slug: 'the-graduate',
    filterBitFieldIndex: 9,
  },
};

export default venues;
