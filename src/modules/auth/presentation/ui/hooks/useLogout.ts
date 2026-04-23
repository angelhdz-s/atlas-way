import { nextAuthLogout } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';

export function useLogout() {
  const { addToast } = useToast();
  const handleLogout = () => {
    try {
      nextAuthLogout();
    } catch (_e) {
      addToast('Error trying to log in', { type: 'error' });
    }
  };

  return {
    handleLogout,
  };
}
