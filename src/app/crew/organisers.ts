import AdamPhoto from '@/assets/people/adam.jpg';
import AlexPhoto from '@/assets/people/alex.jpg';
import DaePhoto from '@/assets/people/dae.jpg';
import MaximusPhoto from '@/assets/people/maximus.jpg';
import JoshPhoto from '@/assets/people/josh.jpg';
import ElliePhoto from '@/assets/people/ellie.jpg';
import EthanPhoto from '@/assets/people/ethan.jpg';
import KitPhoto from '@/assets/people/kit.jpg';
import { IdCardProps } from '@/app/components/id-card';
import KishanPhoto from '@/assets/people/kishan.jpg';
import EchoPhoto from '@/assets/people/echo.jpg';
import DannyPhoto from '@/assets/people/danny.jpg';
import JoelPhoto from '@/assets/people/joel.jpg';

const organisers: IdCardProps[] = [
  {
    name: 'Adam',
    role: 'WSAF Lead (Technical)',
    description: '4th Year Computer Systems Engineering',
    image: AdamPhoto,
  },
  {
    name: 'Alex',
    role: 'WSAF Lead (Operations)',
    description: '3rd Year\nChemistry (PhD)',
    image: AlexPhoto,
  },
  {
    name: 'Dae',
    role: 'WSAF Lead (Communications)',
    description: '3rd Year\nLiberal Arts',
    image: DaePhoto,
  },
  {
    name: 'Maximus',
    role: 'WSAF Lead (Finance & Data)',
    description: '2nd Year\nMathematics',
    image: MaximusPhoto,
  },
  {
    name: 'Josh',
    role: 'Head of\nDigital',
    description: '3rd Year Computer Science',
    image: JoshPhoto,
  },
  {
    name: 'Ellie',
    role: 'Head of Marketing',
    description: '3rd Year English and Theatre Studies',
    image: ElliePhoto,
  },
  {
    name: 'Ethan',
    role: 'Head of\nTeam Catering',
    description: '3rd Year Mechanical Engineering',
    image: EthanPhoto,
  },
  {
    name: 'Joel',
    role: 'Head of Streaming',
    description: '3rd Year Computer Science',
    image: JoelPhoto,
  },
  {
    name: 'Kit',
    role: 'Communications',
    description: '3rd Year Politics and Sociology',
    image: KitPhoto,
  },
  {
    name: 'Kishan',
    role: 'Tech',
    description: '3rd Year Computer Science & Mathematics',
    image: KishanPhoto,
  },
  {
    name: 'Echo',
    role: 'Tech',
    description: '2nd Year Cyber Security',
    image: EchoPhoto,
  },
  {
    name: 'Danny',
    role: 'Sustainability Coordinator',
    description: '3rd Year Biological Sciences',
    image: DannyPhoto,
  },
];

organisers.sort((a, b) => a.name.localeCompare(b.name));

export default organisers;
