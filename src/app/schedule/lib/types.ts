export type Speaker = {
  name: string;
  code: string;
  biography: string;
};

export type Event = {
  title: string;
  slug: string;
  description: string;
  start: string;
  end: string;
  state: string;
  speakers: Speaker[];
  duration: number | null;
  room: string | null;
  tags: string[];
};
