'use client';

import CloseButton from '@/presentation/globals/components/modal/CloseButton';

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
      <button
        type="submit"
        className={`fg-strong-dark border-blue-600 bg-blue-600 ${isPending ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        onClick={handleSubmit}
      >
        Create
      </button>
      <CloseButton className="fg-strong border-bd-strong">
        Cancel
      </CloseButton>
    </>
  );
}
