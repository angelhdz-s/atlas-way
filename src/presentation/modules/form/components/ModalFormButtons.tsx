'use client';

import CloseButton from '@/presentation/globals/components/modal/CloseButton';
import { VariantButton } from '../../button/components/VariantButton';

export function ModalFormButtons({
  isPending = false,
}: {
  isPending?: boolean;
}) {
  // const router = useRouter();

  const handleSubmit = () => {
    // router.back();
  };
  return (
    <>
      <VariantButton
        type="button"
        variantConfig={{
          color: 'primary',
        }}
        className={
          isPending ? 'cursor-not-allowed opacity-50' : ''
        }
        onClick={handleSubmit}
      >
        Create
      </VariantButton>
      <CloseButton>Cancel</CloseButton>
    </>
  );
}
