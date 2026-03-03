'use client';

import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { useRouter } from 'next/navigation';

export default function CloseButton({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <VariantButton
      color="simple"
      className={className}
      onClick={handleClose}
    >
      {children}
    </VariantButton>
  );
}
