'use client';

import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { redirect } from 'next/navigation';

export function LogInButton() {
  const handleSignIn = () => {
    redirect('/api/auth/signin');
  };
  return (
    <VariantButton
      type="button"
      className="rounded-full py-1.5 whitespace-nowrap"
      color="primaryOutline"
      size="md"
      onClick={handleSignIn}
    >
      Log in
    </VariantButton>
  );
}
