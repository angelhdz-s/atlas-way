'use client';

import { Button } from '@/presentation/modules/button/components/Button';
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
    <Button
      type="button"
      variantConfig={{
        color: 'simple',
      }}
      className={className}
      onClick={handleClose}
    >
      {children}
    </Button>
  );
}
