import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: 'warwick',
      name: 'University of Warwick',
      type: 'oauth',

      clientId: process.env.AUTH_WARWICK_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.AUTH_WARWICK_OAUTH_CLIENT_SECRET as string,

      authorization: 'https://websignon.warwick.ac.uk/oauth/authorise',
      token: 'https://websignon.warwick.ac.uk/oauth/requestToken',
      userinfo: 'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',

      allowDangerousEmailAccountLinking: true,

      profile(profile) {
        console.log(profile);

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
});
