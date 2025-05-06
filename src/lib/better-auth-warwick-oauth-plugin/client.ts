/*
// Custom client plugin for Warwick OAuth 1.0a
// https://warwick.ac.uk/services/its/servicessupport/web/sign-on/help/oauth/

// https://github.com/better-auth/better-auth/blob/main/packages/better-auth/src/plugins/generic-oauth/client.ts

import type { genericOAuth } from '.';
import { BetterAuthClientPlugin } from 'better-auth/types';

export const genericOAuthClient = () => {
  return {
    id: 'warwick-oauth-client',
    $InferServerPlugin: {} as ReturnType<typeof genericOAuth>,
  } satisfies BetterAuthClientPlugin;
};
*/
