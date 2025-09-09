export type MainConfig = {
  dates: {
    year: string;
    week: string;
    durationDaysText: string;

    startDate: string;
    startDateIso: string;
    endDate: string;
    endDateIso: string;
    month: string;
  };
  socials: {
    instagram: string;
    discordInvite: string;
    youtubeHandle: string;
  };
  submissions: {
    open: boolean;
    closingDate: string;
    url: string;
  };
  crew: {
    url: string;
  };
  feedback: {
    homepage: boolean;
    banner: boolean;
    popup: boolean;
    url: string;
  };
  githubUrl: string;
  defaultMetaDescription: string;
};
