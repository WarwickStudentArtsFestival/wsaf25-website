'use client';

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn()}
      className="inline-block mb-1 bg-teal px-6 py-2 drop-shadow-xs hover:scale-105 text-white mx-2 cursor-pointer"
    >
      Sign In
    </button>
  );
}
