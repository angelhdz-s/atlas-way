'use client';

import { useFormContext } from 'react-hook-form';
import { Button } from '../../../button/components/Button';

export function ModalFormButtons({ onClose }: { onClose?: () => void }) {
  const handleClose = () => {
    onClose?.();
  };
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <footer className="mt-2 flex justify-end">
      <Button
        type="button"
        variantConfig={{
          color: 'simple',
        }}
        onClick={handleClose}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variantConfig={{
          color: 'primary',
        }}
        className={isSubmitting ? 'cursor-not-allowed opacity-50' : ''}
      >
        Create
      </Button>
    </footer>
  );
}
