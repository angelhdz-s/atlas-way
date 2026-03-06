'use client';

import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { redirect } from 'next/navigation';

export function LogOutButton() {
  const handleSignOut = () => {
    redirect('/api/auth/signout');
  };
  return (
    <VariantButton type="button" variantConfig={{ color: 'subtle' }} onClick={handleSignOut}>
      Log Out
    </VariantButton>
  );
}
