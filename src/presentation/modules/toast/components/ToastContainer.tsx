'use client';

import { createPortal } from 'react-dom';
import { ToastItem } from '@/presentation/modules/toast/components/ToastItem';
import type { Toast } from '@/presentation/globals/presentation.types';

interface Props {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: Props) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className="fixed right-4 bottom-4 z-100 flex flex-col-reverse gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => onRemove(toast.id)} />
      ))}
    </div>,
    document.body
  );
}
