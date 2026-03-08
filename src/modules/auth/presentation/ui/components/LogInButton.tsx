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
      variantConfig={{ size: 'sm', color: 'primary' }}
      onClick={handleSignIn}
    >
      Log in
    </VariantButton>
  );
}
