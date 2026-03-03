'use client';

import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { redirect } from 'next/navigation';

export function LogInButton() {
  const handleSignIn = () => {
    redirect('/api/auth/signin');
  };
  return (
    <VariantButton
      color="primary"
      size="md"
      onClick={handleSignIn}
    >
      Log in
    </VariantButton>
  );
}
