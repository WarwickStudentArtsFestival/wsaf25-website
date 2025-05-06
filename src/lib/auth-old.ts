/*
import 'server-only';

import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from '@/lib/prisma';
import { nextCookies } from 'better-auth/next-js';
import { genericOAuth } from 'better-auth/plugins';

export const authOld = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'mysql',
  }),

  trustedOrigins: ['https://www.warwicktechcrew.co.uk/test'],

  plugins: [
    genericOAuth({
      config: [
        // Request token URL: https://websignon.warwick.ac.uk/oauth/requestToken
        {
          providerId: 'warwick',
          authorizationUrl:
            'https://websignon.warwick.ac.uk/oauth/requestToken',
          tokenUrl: 'https://websignon.warwick.ac.uk/oauth/authorise',
          userInfoUrl:
            'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',
          clientId: process.env.BETTER_AUTH_WARWICK_OAUTH_CLIENT_ID as string,
          clientSecret: process.env
            .BETTER_AUTH_WARWICK_OAUTH_CLIENT_SECRET as string,
          scopes: ['urn:websignon.warwick.ac.uk:sso:service'],
        },
      ],
    }),

    // https://www.better-auth.com/docs/integrations/next#server-action-cookies
    nextCookies(),
  ],
});
*/
