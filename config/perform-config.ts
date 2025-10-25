import { PerformConfig } from '@config/types/perform-config';
import Artwork from '@/assets/perform/fabgallery.jpg';
import Dance from '@/assets/perform/dance.jpg';
import Drama from '@/assets/perform/lastorders.jpg';
import Music from '@/assets/perform/orch.jpg';
import SpokenWord from '@/assets/perform/spoken-word.jpg';

const performConfig: PerformConfig = {
  // Whether to say that submissions are closed
  closed: true,

  // Whether to show a link to the submission portal
  showSubmissionLink: true,

  performanceTypes: [
    {
      name: 'Artwork',
      description:
        'Visual art displayed across our Art Galleries in FAB. This includes photography, painting, sculpture, and installations from student artists. Last year we had tapestry work and a tie dye workshop!',
      image: Artwork,
    },
    {
      name: 'Dance',
      description:
        'Dance performances to light up the main stage with rhythm, movement, and expression. Open to all groups and individuals.',
      image: Dance,
    },
    {
      name: 'Drama',
      description:
        'Theatrical productions ranging from original student-written works to classic plays. WSAF 2024 showcased six student written plays! Drama at WSAF includes everything from monologues to full ensemble performances.',
      image: Drama,
    },
    {
      name: 'Music',
      description:
        'Musical performances from bands, soloists, choirs, and ensembles. Last year, Wind Orchestra played continuously for eight hours in their charity playathon! WSAF provides an open platform for musicians of all styles and genres to showcase their talent.',
      image: Music,
    },
    {
      name: 'Spoken Word',
      description:
        'Poetry, storytelling, and stand-up comedy, spoken word performances give space to personal expression and creativity using the power of voice.',
      image: SpokenWord,
    },
  ],
};

export default performConfig;
