export const formatDate = (time: string) => {
  const date = new Date(time);
  const day = date.getDate();

  const getOrdinal = (n: number) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'st';
    if (mod10 === 2 && mod100 !== 12) return 'nd';
    if (mod10 === 3 && mod100 !== 13) return 'rd';
    return 'th';
  };

  const ordinalDay = `${day}${getOrdinal(day)}`;

  const weekday = date.toLocaleDateString([], { weekday: 'short' });
  const month = date.toLocaleDateString([], { month: 'short' });

  return `${weekday}, ${month} ${ordinalDay}`;
};

export const formatTime = (time: string | undefined): string => {
  if (!time) {
    return 'No time';
  }
  const date = new Date(time);
  if (date.getHours() === 12 && date.getMinutes() === 0) {
    return 'Midday';
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 || 12;
  const formattedMinute = minutes.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${amPm}`;
};

export const formatDuration = (durationInMinutes: number): string => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return minutes > 0 ? `${hours}h ${minutes} min` : `${hours}h`;
};
