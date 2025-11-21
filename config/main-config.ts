import { MainConfig } from '@config/types/main-config';

const mainConfig: MainConfig = {
  dates: {
    year: '2025',
    week: 'Week 8-9',
    durationDaysText: 'four',

    startDate: 'Fri 13th',
    startDateIso: '2025-06-13T10:00:00.000',
    endDate: 'Mon 16th',
    endDateIso: '2025-06-16T22:00:00.000',
    month: 'June',
  },
  socials: {
    instagram: 'wsaf25',
    discordInvite: 'https://discord.gg/TuFwJX4GKM',
    youtubeHandle: 'wsaf25',
  },
  submissions: {
    open: false,
    closingDate: 'Friday Week 2 (2nd May)',
    submitUrl: 'https://submit.wsaf.org.uk/2025/cfp',
  },
  crew: {
    signupUrl: 'https://helfertool.wsaf.org.uk/wsaf2025/',
  },
  feedback: {
    homepage: false,
    banner: false,
    popup: false,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638',
  },
  githubUrl: 'https://github.com/WarwickStudentArtsFestival/wsaf25-website',
  defaultMetaDescription:
    'Warwick Student Arts Festival (WSAF) is a fully student-run showcase and celebration of the arts at Warwick, taking place in Week 8-9 of Term 3 (Fri 13th - Mon 16th June).\\n\\nSubmissions for events are open until Friday 2nd May!',
};

export default mainConfig;
