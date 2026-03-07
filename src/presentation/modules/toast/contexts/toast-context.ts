import { createContext } from 'react';
import type { Prettify, Toast } from '@/presentation/globals/types.d';

type ToastOptions = Prettify<Partial<Omit<Toast, 'id' | 'message'>>>;
interface ToastContextType {
  addToast: (message: string, options?: ToastOptions) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
