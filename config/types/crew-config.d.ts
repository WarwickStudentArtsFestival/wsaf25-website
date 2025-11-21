import { StaticImageData } from 'next/image';

export type CrewConfig = {
  // Whether to allow signing up directly (to the crew sign up URL in the main
  // config), or to direct to Discord instead
  allowSignUps: boolean;

  roles: { name: string; description: string; image: StaticImageData }[];
};
