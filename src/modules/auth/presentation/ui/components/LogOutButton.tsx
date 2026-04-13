'use client';

import { redirect } from 'next/navigation';
import { Button } from '@/presentation/modules/button/components/Button';

export function LogOutButton() {
  const handleSignOut = () => {
    redirect('/api/auth/signout');
  };
  return (
    <Button type="button" variantConfig={{ color: 'subtle', size: 'sm' }} onClick={handleSignOut}>
      Log Out
    </Button>
  );
}
