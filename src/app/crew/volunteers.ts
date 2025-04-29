import { IdCardProps } from '@/app/components/people-involved/id-card';
import DallonPhoto from '@/assets/people/dallon.jpg';
import EchoPhoto from '@/assets/people/echo.jpg';
import KishanPhoto from '@/assets/people/kishan.jpg';
import EthanPhoto from '@/assets/people/ethan.jpg';
import JoshPhoto from '@/assets/people/josh.jpg';
import KitPhoto from '@/assets/people/kit.jpg';
import DannyPhoto from '@/assets/people/danny.jpg';
import DaePhoto from '@/assets/people/dae.jpg';
import AdamPhoto from '@/assets/people/adam.jpg';
import GeorgePhoto from '@/assets/people/george.jpg';
import StanPhoto from '@/assets/people/stan.jpg';
import JoelPhoto from '@/assets/people/joel.jpg';
import AlicePhoto from '@/assets/people/alice.jpg';
import AlasdairPhoto from '@/assets/people/alasdair.jpg';
import GleiPhoto from '@/assets/people/glei.jpg';
import IndiePhoto from '@/assets/people/indie.jpg';
import KieranPhoto from '@/assets/people/kieran.jpg';
import AnisPhoto from '@/assets/people/anis.jpg';
import HannahPhoto from '@/assets/people/hannah.jpg';
import AdinaPhoto from '@/assets/people/adina.jpg';
import VeronicaPhoto from '@/assets/people/veronica.jpg';

const volunteers: IdCardProps[] = [
  {
    name: 'Stan',
    role: 'Venue Manager',
    description: '1st Year Maths',
    image: StanPhoto,
  },
  {
    name: 'George',
    role: 'Venue Manager',
    description: '1st Year Film Studies',
    image: GeorgePhoto,
  },
  {
    name: 'Alice',
    role: 'Venue Manager',
    description: '3rd Year Manufacturing & Mechanical Engineering',
    image: AlicePhoto,
  },
  {
    name: 'Alasdair',
    role: 'Venue Manager',
    description: '1st Year History',
    image: AlasdairPhoto,
  },
  {
    name: 'Danny',
    role: 'Sound, LX & Tech',
    description: '2nd Year Biological Sciences',
    image: DannyPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Echo',
    role: 'Sound, LX & Tech',
    description: '1st Year Cyber Security',
    image: EchoPhoto,
  },
  {
    name: 'Dallon',
    role: 'LX & Tech',
    description: '2nd Year Spanish, Italian and Linguistics',
    image: DallonPhoto,
  },
  {
    name: 'Kishan',
    role: 'Sound & Tech',
    description: '2nd Year Discrete Maths',
    image: KishanPhoto,
  },
  {
    name: 'Kit',
    role: 'Sound & Tech',
    description: '2nd Year Politics and Sociology',
    image: KitPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Josh',
    role: 'Sound & Tech',
    description: '2nd Year Computer Science',
    image: JoshPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Joel',
    role: 'Video & Tech',
    description: '2nd Year Computer Science',
    image: JoelPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Anis',
    role: 'LX',
    description: '3rd Year Philosophy with Psychology',
    image: AnisPhoto,
  },
  {
    name: 'Glei',
    role: 'Video',
    description: '3rd Year English Literature',
    image: GleiPhoto,
  },
  {
    name: 'Indie',
    role: 'Video',
    description: '1st Year Film Studies',
    image: IndiePhoto,
  },
  {
    name: 'Ethan',
    role: 'Tech',
    description: '3rd Year Mechanical Engineering',
    image: EthanPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Dae',
    role: 'Tech',
    description: '2nd Year\nLiberal Arts',
    image: DaePhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Adam',
    role: 'Tech',
    description: '4th Year Computer Systems Engineering',
    image: AdamPhoto,
    isBothOrganiserAndVolunteer: true,
  },
  {
    name: 'Kieran',
    role: 'Steward',
    description: '1st Year Maths',
    image: KieranPhoto,
  },
  {
    name: 'Hannah',
    role: 'Steward',
    description: '1st Year Film and Television',
    image: HannahPhoto,
  },
  {
    name: 'Adina',
    role: 'Steward',
    description: '2nd Year Sociology and Criminology',
    image: AdinaPhoto,
  },
  {
    name: 'Veronica',
    role: 'Steward',
    description: '1st Year Film Studies',
    image: VeronicaPhoto,
  },
];

export default volunteers;
