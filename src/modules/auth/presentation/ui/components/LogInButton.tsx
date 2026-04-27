'use client';

import { Button } from '@/presentation/modules/button/components/Button';
import { useLogin } from '@/modules/auth/presentation/ui/hooks/useLogin';

export function LogInButton() {
  const { handleLogin } = useLogin();

  return (
    <Button type="button" variant={{ size: 'sm', color: 'primary' }} onClick={handleLogin}>
      Log in
    </Button>
  );
}
