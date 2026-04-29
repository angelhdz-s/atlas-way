'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/presentation/modules/button/components/Button';

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
      variant={{
        color: 'simple',
      }}
      className={className}
      onClick={handleClose}
    >
      {children}
    </Button>
  );
}
