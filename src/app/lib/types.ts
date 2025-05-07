import { StaticImageData } from 'next/image';

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
  slot: { room_id: number; room: { en: string }; start: string; end: string };
  image: string;
  duration: number;
};

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

export type CustomRoomData = {
  imageAlt: string;
  mapUrl: string;
  image: StaticImageData;
  roomLocation: string;
  eventCount: number;
};

export type ExtendedRoom = Room & Partial<CustomRoomData>;
