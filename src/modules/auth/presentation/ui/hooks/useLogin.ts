import { nextAuthLogin } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';

export function useLogin() {
  const { addToast } = useToast();
  const handleLogin = () => {
    try {
      nextAuthLogin();
    } catch (_e) {
      addToast('Error trying to log in', { type: 'error' });
    }
  };

  return {
    handleLogin,
  };
}
