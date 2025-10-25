import { KeyDateProps } from '@/app/(home)/components/key-date';

export type HomepageConfig = {
  hero: {
    youtubeVideoId: string;
  };

  about: {
    countdown: {
      enabled: boolean;
      title: string;
      subtitle: string;
      countdownDateIso: string;
    };
  };

  eventPreview: {
    enabled: boolean;
  };

  youtube: {
    enabled: boolean;
    heading: title;
    title: string;
    description: string;
  };

  keyDates: KeyDateProps[];
};
