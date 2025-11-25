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
  header: {
    rightButtons: {
      discord: boolean;
      feedback: boolean;
      crewPage: boolean;

      crewSignup: boolean;
      submissionsPortal: boolean;
    };
  };
  socials: {
    instagram: string;
    discordInvite: string;
    youtubeHandle: string;
  };
  submissions: {
    open: boolean;
    closingDate: string;
    submitUrl: string;
  };
  crew: {
    signupUrl: string;
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
