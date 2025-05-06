export type Speaker = {
  code: string;
  name: string;
};

export type Talk = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: { en: string };
  track: { en: string };
  state: string;
  description: string;
  slot: { room: { en: string }; start: string; end: string };
  image: string;
  duration: number;
};

type TalkTrack =
  | 'Theatre'
  | 'Music'
  | 'Comedy'
  | 'Mixed'
  | 'Dance'
  | 'Visual Art'
  | 'Creation'
  | 'MTW Stagefest'
  | 'Film'
  | 'Spoken Word';
