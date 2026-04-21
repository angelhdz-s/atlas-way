'use client';

import { ToastItem } from '@/presentation/modules/toast/components/ToastItem';

export function DevToasts() {
  const handleClose = () => {};

  return (
    <div className="flex flex-col gap-2">
      <ToastItem
        toast={{
          type: 'error',
          id: 'error',
          duration: 3000,
          message: 'Mensaje totalmente de prueba',
        }}
        onClose={handleClose}
      />
      <ToastItem
        toast={{
          type: 'info',
          id: 'info',
          duration: 3000,
          message: 'Mensaje totalmente de prueba',
        }}
        onClose={handleClose}
      />
      <ToastItem
        toast={{
          type: 'success',
          id: 'success',
          duration: 3000,
          message: 'Mensaje totalmente de prueba',
        }}
        onClose={handleClose}
      />
      <ToastItem
        toast={{
          type: 'warning',
          id: 'warning',
          duration: 3000,
          message: 'Mensaje totalmente de prueba',
        }}
        onClose={handleClose}
      />
    </div>
  );
}
