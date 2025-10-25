import { AdditionalVenueData } from '@/lib/venues';

export type VenuesConfig = {
  // Mapping from Pretalx venue GUID to additional venue data
  venues: Record<string, AdditionalVenueData>;
};
