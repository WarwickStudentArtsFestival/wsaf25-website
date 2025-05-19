// These are used for time filtering in the event sessions list

// Earliest and largest date time that can be selected
export const startDate = new Date('2025-06-13T09:00:00Z').getTime();
export const endDate = new Date('2025-06-16T21:00:00Z').getTime();

// Within the festival dates, the earliest and latest time that can be selected
export const startHourUtc = 9; // 10am
export const endHourUtc = 21; // 10pm

// Minute interval for the time slider. Should be a factor of 60
export const minuteInterval = 15;
