export type Room = {
  id: number;
  guid: string;
  name: {
    en: string;
  };
  description: {
    en: string;
  };
  capacity: number;
  position: number | null;
  url: string;
  speaker_info: { en: string };
  availabilities: {
    id: number;
    start: string;
    end: string;
    allDay: boolean;
  }[];
};
