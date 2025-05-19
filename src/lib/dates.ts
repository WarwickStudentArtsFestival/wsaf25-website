export const formatDate = (date: Date) => {
  const day = date.getDate();

  const getOrdinal = (n: number) => {
    const mod = n % 10;
    if (mod === 1) return 'st';
    if (mod === 2) return 'nd';
    if (mod === 3) return 'rd';
    return 'th';
  };

  const ordinalDay = `${day}${getOrdinal(day)}`;

  const weekday = date.toLocaleDateString([], { weekday: 'long' });
  const month = date.toLocaleDateString([], { month: 'long' });

  return `${weekday} ${ordinalDay} ${month}`;
};

export const formatTime = (date: Date): string => {
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
