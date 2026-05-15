import { use } from 'react';
import { ToastContext } from '@/presentation/modules/toast/contexts/toast-context';

export const useToast = () => {
  const ctx = use(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
