import { TeamConfig } from '@config/types/team-config';

import AdamSocieties from '@/assets/team/adam-societies.jpg';
import OllyMurphy from '@/assets/team/olly-murphy.jpg';
import AbiLowrie from '@/assets/team/abi-lowrie.jpg';
import JoshHeng from '@/assets/team/josh-heng.jpg';
import EthanGraham from '@/assets/team/ethan-graham.jpg';
import KishanSharma from '@/assets/team/kishan-sharma.jpg';
import AlexanderSpears from '@/assets/team/alexander-spears.jpg';
import DaePomeroy from '@/assets/team/dae-pomeroy.jpg';
import TrinBalkwill from '@/assets/team/trin-balkwill.jpg';
import AliaMeek from '@/assets/team/alia-meek.jpg';
import SeanScholand from '@/assets/team/sean-scholand.jpg';
import SophieScholand from '@/assets/team/sophie-scholand.jpg';
import CalebTan from '@/assets/team/caleb-tan.jpg';
import MattAdcock from '@/assets/team/matt-adcock.jpg';
import MaximusKaiusLeighton from '@/assets/team/maximus-kaius-leighton.jpg';
import KitCalvert from '@/assets/team/kit-calvert.jpg';
import JoelCoulon from '@/assets/team/joel-coulon.jpg';
import GeorgeParrett from '@/assets/team/george-parrett.jpg';
import RowanMcAlpine from '@/assets/team/rowan-mcalpine.jpg';
import AliceRobson from '@/assets/team/alice-robson.jpg';
import EmrysMachnicki from '@/assets/team/emrys-machnicki.jpg';
import IzzyMarzolini from '@/assets/team/izzy-marzolini.jpg';
import EchoVaughan from '@/assets/team/echo-vaughan.jpg';
import StanSimmons from '@/assets/team/stan-simmons.jpg';
import LuluSmith from '@/assets/team/lulu-smith.jpg';
import MaxPike from '@/assets/team/max-pike.jpg';
import EllieStocker from '@/assets/team/ellie-stocker.jpg';
import NaomiPandey from '@/assets/team/naomi-pandey.jpg';
import DannyTurner from '@/assets/team/danny-turner.jpg';
import DanaiMuyambo from '@/assets/team/danai-muyambo.jpg';

const teamConfig: TeamConfig = {
  team: [
    {
      name: 'Trin Balkwill',
      roles: ['Venue Manager', 'Bar Staff'],
      course: 'Cyber Security',
      year: '2nd Year',
      image: TrinBalkwill,
    },
    {
      name: 'Olly Murphy',
      roles: ['Technical Coordinator'],
      course: 'Computer Systems Engineering',
      year: '1st Year',
      image: OllyMurphy,
    },
    {
      name: 'Alia Meek',
      roles: ['Bar Manager'],
      course: 'Computer Systems Engineering',
      year: '4th Year',
      image: AliaMeek,
    },
    {
      name: 'Joel Coulon',
      roles: ['Head of Stream'],
      course: 'Computer Science',
      year: '3rd Year',
      image: JoelCoulon,
    },
    {
      name: 'Alice Robson',
      roles: ['Venue Manager'],
      year: '3rd Year',
      course: 'Manufacturing and Mechanical Engineering',
      image: AliceRobson,
    },
    {
      name: 'Sean Scholand',
      roles: ['Steward', 'Streaming', 'RaW Coverage'],
      course: 'Physics',
      year: '1st Year',
      image: SeanScholand,
    },
    {
      name: 'Sophie Scholand',
      roles: ['Steward'],
      course: 'Biological Sciences',
      year: '1st Year',
      image: SophieScholand,
    },
    {
      name: 'Oliver Smith',
      roles: ['Tech', 'Streaming'],
      course: 'Computer Science',
      year: '3rd Year',
      // waiting
    },
    {
      name: 'Emrys Machnicki',
      roles: ['Photography', 'Marketing'],
      course: 'International Management',
      year: '2nd Year',
      image: EmrysMachnicki,
    },
    {
      name: 'Rowan McAlpine',
      roles: ['Photography', 'Tech'],
      course: 'English Literature and Creative Writing',
      year: '1st Year',
      image: RowanMcAlpine,
    },
    {
      name: 'Abi Lowrie',
      roles: ['Head of Catering'],
      course: 'Cyber Security',
      year: '2nd Year',
      image: AbiLowrie,
    },
    {
      name: 'Izzy Marzolini',
      roles: ['Steward', 'Bar Staff'],
      course: 'English and Theatre Studies',
      year: '1st Year',
      image: IzzyMarzolini,
    },
    {
      name: 'Caleb Tan',
      roles: ['Tech', 'Steward'],
      course: 'History and Politics',
      year: '1st Year',
      image: CalebTan,
    },
    {
      name: 'Lulu Smith',
      roles: ['Tech'],
      course: 'History',
      year: '1st Year',
      image: LuluSmith,
    },
    {
      name: 'Chaeyeon Kim',
      roles: ['Marketing', 'Bar Staff'],
      course: 'Theatre and Performance Studies',
      year: 'Exchange Year',
      // Chaeyeon
    },
    {
      name: 'George Parrett',
      roles: ['Head of Venues'],
      course: 'Film Studies',
      year: '3rd Year',
      image: GeorgeParrett,
    },
    {
      name: 'Matt Adcock',
      roles: ['Steward', 'First Aid'],
      course: 'Computer Science and Artificial Intelligence (Nottingham)',
      year: '1st Year',
      image: MattAdcock,
    },
    {
      name: 'Adam Skrzymowski',
      roles: ['WSAF Lead (Technical)', 'Tech', 'Video'],
      course: 'Computer Systems Engineering',
      year: '4th Year',
      image: AdamSocieties,
    },
    {
      name: 'Kit Calvert',
      roles: ['Marketing'],
      course: 'Politics and Sociology',
      year: '3rd Year',
      image: KitCalvert,
    },
    {
      name: 'Danai Muyambo',
      roles: ['Venue Manager', 'Tech', 'Organiser'],
      course: 'Data Science',
      year: '1st Year',
      image: DanaiMuyambo,
    },
    {
      name: 'Maximus Kaius Leighton',
      roles: ['Head of Finance', 'Bar Operator', 'Tech', 'Organiser'],
      course: 'Mathematics',
      year: '2nd Year',
      image: MaximusKaiusLeighton,
    },
    {
      name: 'Josh Heng',
      roles: [
        'Head of Digital',
        'Website',
        'Tech',
        'First-aid',
        'Marketing',
        'Photography',
        'Bar Staff',
      ],
      year: '3rd Year',
      course: 'Computer Science',
      image: JoshHeng,
    },
    {
      name: 'Echo Vaughan',
      roles: ['Steward', 'Bar Staff', 'Tech'],
      year: '2nd Year',
      course: 'Cyber Security',
      image: EchoVaughan,
    },
    {
      name: 'Danny Turner',
      roles: [
        'Welfare Officer',
        'Venue Manager',
        'Head of Marketing',
        'Event Control',
        'Tech',
      ],
      course: 'Biological Sciences',
      year: '3rd Year',
      image: DannyTurner,
    },
    {
      name: 'Ethan Graham',
      roles: ['Head of Food & Beverage', 'Bar Manager', 'Operations Manager'],
      course: 'Mechanical Engineering',
      year: '3rd Year',
      image: EthanGraham,
    },
    {
      name: 'Alexander Spears',
      roles: ['WSAF Coordinator'],
      course: 'Chemistry (PGR)',
      year: 'PhD',
      image: AlexanderSpears,
    },
    {
      name: 'Dae Pomeroy',
      roles: ['Organiser'],
      course: 'Liberal Arts',
      year: '3rd Year',
      image: DaePomeroy,
    },
    {
      name: 'Stan Simmons',
      roles: ['Organiser', 'Event Control'],
      year: '2nd Year',
      course: 'Mathematics',
      image: StanSimmons,
    },
    {
      name: 'Max Pike',
      year: 'Final Year',
      roles: ['Venue Manager'],
      course: 'Politics and International Studies',
      image: MaxPike,
    },
    {
      name: 'Ellie Stocker',
      roles: ['Head of Marketing'],
      year: '3rd Year',
      course: 'English and Theatre Studies',
      image: EllieStocker,
    },
    {
      name: 'Kishan Sharma',
      roles: ['Website', 'Tech'],
      year: '3rd Year',
      course: 'Computer Science & Mathematics',
      image: KishanSharma,
    },
    {
      name: 'Naomi Pandey',
      roles: ['Marketing'],
      year: '2nd Year',
      course: 'English Literature and Creative Writing',
      image: NaomiPandey,
    },
  ],
};

export default teamConfig;
