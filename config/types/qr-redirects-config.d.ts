export type QrRedirectsConfig = {
  redirects: {
    shortlink: string;
    destination: string;

    campaign?: string;
    medium?: string;
    source?: string;
  }[];
};
