'use client';

import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { redirect } from 'next/navigation';

export function LogOutButton() {
  const handleSignOut = () => {
    redirect('/api/auth/signout');
  };
  return (
    <VariantButton
      type="button"
      size="md"
      className="hover:fg-strong cursor-pointer pl-0.5 whitespace-nowrap transition-colors"
      onClick={handleSignOut}
    >
      Log Out
    </VariantButton>
  );
}
