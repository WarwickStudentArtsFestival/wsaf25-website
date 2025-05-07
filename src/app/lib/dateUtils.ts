export const formatDate = (time: string) => {
  const date = new Date(time);
  return date.toLocaleDateString([], {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
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
