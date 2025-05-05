export type Speaker = {
  name: string;
  code: string;
  biography: string;
};

export type Talk = {
  code: string;
  title: string;
  state: string;
  description: string;
  start: string;
  end: string;
  speakers: Speaker[];
  duration: number | null;
  room: string | null;
  tags: string[];
};
