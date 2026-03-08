'use client';

import { useFormContext } from 'react-hook-form';
import { VariantButton } from '../../../button/components/VariantButton';

export function ModalFormButtons({ onClose }: { onClose?: () => void }) {
  const handleClose = () => {
    onClose?.();
  };
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <footer className="mt-2 flex justify-end">
      <VariantButton
        type="button"
        variantConfig={{
          color: 'simple',
        }}
        onClick={handleClose}
      >
        Cancel
      </VariantButton>
      <VariantButton
        type="submit"
        variantConfig={{
          color: 'primary',
        }}
        className={isSubmitting ? 'cursor-not-allowed opacity-50' : ''}
      >
        Create
      </VariantButton>
    </footer>
  );
}
