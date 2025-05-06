import LoginButton from '@/app/login/login-button';
import { auth } from '@/lib/auth';

export default async function LoginPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div>
        <h1>Not Authenticated</h1>

        <div>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Authenticated</h1>
    </div>
  );
}
