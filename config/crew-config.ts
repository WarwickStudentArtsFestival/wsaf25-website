import { CrewConfig } from '@config/types/crew-config';
import Marketing from '@/assets/crew/marketing.jpg';
import Stewards from '@/assets/crew/circle-team.jpg';
import Tech from '@/assets/crew/colourful-stage.jpg';
import VenueManager from '@/assets/crew/fab-terrace-drone.jpg';
import Operations from '@/assets/crew/flight-cases.jpg';
import WBar from '@/assets/crew/wbar.jpg';

const crewConfig: CrewConfig = {
  // Whether to allow signing up directly (to the crew sign up URL in the main
  // config), or to direct to Discord instead
  allowSignUps: true,

  roles: [
    {
      name: 'Marketing',
      description:
        'The marketing team ensures that everyone around campus and in the local community knows about WSAF and all of its events. This includes marketing through social media, posters, flyers and T-shirts and taking photos and videos throughout the event.',
      image: Marketing,
    },
    {
      name: 'Stewards',
      description:
        "Stewards help ensure that all attendees know what's going on and have a great experience. They also check ticket reservations for busy events and distribute stickers and leaflets.",
      image: Stewards,
    },
    {
      name: 'Tech',
      description:
        'The tech team ensure that everyone can be seen and heard through the use of sound/PA and lighting/LX systems. They are also responsible for livestreaming and recording events, where applicable. All tech operators must be members of Warwick Tech Crew - please contact us for more information.',
      image: Tech,
    },
    {
      name: 'Venue Managers',
      description:
        'Venue managers are responsible for looking after each venue and its performance schedule throughout WSAF. They ensure that performers, tech operators and stewards are aware of the schedule and any special requirements and that they communicate well with each other.',
      image: VenueManager,
    },
    {
      name: 'Operations',
      description:
        'The operations and logistics team ensures that the event runs smoothly and are on hand to resolve any issues that can crop up. This can range from transporting equipment between venues to sorting last-minute scheduling issues.',
      image: Operations,
    },
    {
      name: 'Catering & WBar Team',
      description:
        'Our catering team ensures that all volunteers are well fed and hydrated throughout the day. New for 2025, WSAF will also be running an outdoor bar on Benefactors Place which will also be staffed by volunteers.',
      image: WBar,
    },
  ],
};

export default crewConfig;
