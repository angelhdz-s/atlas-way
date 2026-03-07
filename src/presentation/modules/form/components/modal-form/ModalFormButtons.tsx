'use client';

import { VariantButton } from '../../../button/components/VariantButton';

export function ModalFormButtons({
  isPending = false,
  onClose,
}: {
  isPending?: boolean;
  onClose?: () => void;
}) {
  const handleClose = () => {
    onClose?.();
  };
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
        className={isPending ? 'cursor-not-allowed opacity-50' : ''}
      >
        Create
      </VariantButton>
    </footer>
  );
}
