import { StaticImageData } from 'next/image';

export type PerformConfig = {
  // Whether to say that submissions are closed
  closed: boolean;

  // Whether to show a link to the submission portal
  showSubmissionLink: boolean;

  performanceTypes: {
    name: string;
    description: string;
    image: StaticImageData;
  }[];
};
