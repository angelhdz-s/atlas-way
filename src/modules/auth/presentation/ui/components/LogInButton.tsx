'use client';

import { redirect } from 'next/navigation';
import { Button } from '@/presentation/modules/button/components/Button';

export function LogInButton() {
  const handleSignIn = () => {
    redirect('/api/auth/signin');
  };
  return (
    <Button type="button" variantConfig={{ size: 'sm', color: 'primary' }} onClick={handleSignIn}>
      Log in
    </Button>
  );
}
