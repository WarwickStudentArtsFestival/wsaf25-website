import AdamPhoto from '@/assets/people/adam.jpg';
import AlexPhoto from '@/assets/people/alex.jpg';
// import DaePhoto from '@/assets/people/dae.jpg';
import MaximusPhoto from '@/assets/people/maximus.jpg';
import JoshPhoto from '@/assets/people/josh.jpg';
import ElliePhoto from '@/assets/people/ellie.jpg';
import EthanPhoto from '@/assets/people/ethan.jpg';
import KitPhoto from '@/assets/people/kit.jpg';
import { IdCardProps } from '@/app/components/people-involved/id-card';
import KishanPhoto from '@/assets/people/kishan.jpg';
import EchoPhoto from '@/assets/people/echo.jpg';
import DannyPhoto from '@/assets/people/danny.jpg';
import JoelPhoto from '@/assets/people/joel.jpg';
import AlicePhoto from '@/assets/people/alice.jpg';
import GeorgePhoto from '@/assets/people/george.jpg';
import KatchPhoto from '@/assets/people/katch.jpg';
import EmrysPhoto from '@/assets/people/emrys.jpg';
import IzzyPhoto from '@/assets/people/izzy.jpg';
import NaomiPhoto from '@/assets/people/naiomi.jpg';
import DanaiPhoto from '@/assets/people/danai.jpg';
import StanPhoto from '@/assets/people/stan.jpg';
import AliaPhoto from '@/assets/people/alia.jpg';

interface RefactoredIdCardProps extends Omit<IdCardProps, 'description'> {
  year: string;
  course: string;
}

const organisers: RefactoredIdCardProps[] = [
  {
    name: 'Adam',
    role: 'WSAF Lead (Technical)',
    year: '4th Year',
    course: 'Computer Systems Engineering',
    image: AdamPhoto,
  },
  {
    name: 'Alex',
    role: 'WSAF Lead (Operations)',
    year: '3rd Year',
    course: 'Chemistry (PhD)',
    image: AlexPhoto,
  },
  // {
  //   name: 'Dae',
  //   role: 'WSAF Lead (Communications)',
  //   year: '3rd Year',
  //   course: 'Liberal Arts',
  //   image: DaePhoto,
  // },
  {
    name: 'Maximus',
    role: 'WSAF Lead (Finance & Data)',
    year: '2nd Year',
    course: 'Mathematics',
    image: MaximusPhoto,
  },
  {
    name: 'Josh',
    role: 'Head of\nDigital',
    year: '3rd Year',
    course: 'Computer Science',
    image: JoshPhoto,
  },
  {
    name: 'Ellie',
    role: 'Head of Marketing',
    year: '3rd Year',
    course: 'English and Theatre Studies',
    image: ElliePhoto,
  },
  {
    name: 'Joel',
    role: 'Head of Streaming',
    year: '3rd Year',
    course: 'Computer Science',
    image: JoelPhoto,
  },
  {
    name: 'Kishan',
    role: 'Tech',
    year: '3rd Year',
    course: 'Computer Science & Mathematics',
    image: KishanPhoto,
  },
  {
    name: 'Echo',
    role: 'Tech',
    year: '2nd Year',
    course: 'Cyber Security',
    image: EchoPhoto,
  },
  {
    name: 'Danny',
    role: 'Sustainability Coordinator',
    year: '3rd Year',
    course: 'Biological Sciences',
    image: DannyPhoto,
  },
  {
    name: 'Alice',
    role: 'Organiser',
    year: '3rd Year',
    course: 'Manufacturing and Mechanical Engineering',
    image: AlicePhoto,
  },
  {
    name: 'George',
    role: 'Organiser',
    year: '3rd Year',
    course: 'Film Studies',
    image: GeorgePhoto,
  },
  {
    name: 'Katch',
    role: 'Organiser',
    year: '4th Year',
    course: 'Politics and International Studies',
    image: KatchPhoto,
  },
  {
    name: 'Emrys',
    role: 'Organiser',
    year: '2nd Year',
    course: 'International Management ',
    image: EmrysPhoto,
  },
  {
    name: 'Izzy',
    role: 'Organiser',
    year: '1st',
    course: 'English and Theatre Studies',
    image: IzzyPhoto,
  },
  {
    name: 'Naomi',
    role: 'Organiser',
    year: '2nd Year',
    course: 'English and Creative Writing',
    image: NaomiPhoto,
  },
  {
    name: 'Danai',
    role: 'Organiser',
    year: '2nd Year',
    course: 'Data Science',
    image: DanaiPhoto,
  },
  {
    name: 'Stan',
    role: 'Organiser',
    year: '2nd Year',
    course: 'Mathematics',
    image: StanPhoto,
  },
  {
    name: 'Alia',
    role: 'Organiser',
    year: '4th Year',
    course: 'Computer Systems Engineering',
    image: AliaPhoto,
  },
  {
    name: 'Ethan',
    role: 'Organiser',
    year: '3rd Year',
    course: 'Mechanical Engineering',
    image: EthanPhoto,
  },
  {
    name: 'Kit',
    role: 'Organiser',
    year: '3rd Year',
    course: 'Politics and Sociology',
    image: KitPhoto,
  },
];

organisers.sort((a, b) => a.name.localeCompare(b.name));

export default organisers;
