import { KeyDateProps } from '@/app/(home)/components/key-date';

export type HomepageConfig = {
  hero: {
    youtubeVideoId: string;
  };

  youtube: {
    enabled: boolean;
  };

  keyDates: KeyDateProps[];
};
