import { HomepageConfig } from '@config/types/homepage-config';

const homepageConfig: HomepageConfig = {
  hero: {
    youtubeVideoId: '5_doeGYlb-U',
  },

  youtube: {
    enabled: true,
  },

  keyDates: [
    {
      name: 'Submissions Open',
      date: 'Mon 10th March',
      dateTime: '2025-03-10',
      description: 'WSAF performance submissions open.',
      warwickWeek: 'Term 2 Week 10',
    },
    {
      name: 'Submissions Close',
      date: 'Friday 2nd May',
      dateTime: '2025-05-02',
      description:
        'Submission form closes and the schedule and logistics are finalised.',
      warwickWeek: 'Term 3, Week 2',
    },
    {
      name: 'WSAF',
      date: 'Fri 13th - Mon 16th June',
      dateTime: '2025-06-13',
      description:
        'The festival itself - a 4 day showcase and celebration of all aspects of the arts.',
      warwickWeek: 'Term 3, Week 8/9',
    },
  ],
};

export default homepageConfig;
