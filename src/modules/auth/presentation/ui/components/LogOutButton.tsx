'use client';

import { Button } from '@/presentation/modules/button/components/Button';
import { useLogout } from '@/modules/auth/presentation/ui/hooks/useLogout';

export function LogOutButton() {
  const { handleLogout } = useLogout();
  return (
    <Button type="button" variantConfig={{ color: 'subtle', size: 'sm' }} onClick={handleLogout}>
      Log Out
    </Button>
  );
}
