'use client';
import { useRouter } from 'next/navigation';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
export function Modal({
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

  const { ref } = useLayer({
    onClose: handleClose,
    isOpen: true,
  });

  return (
    <div className={`fixed inset-0 z-50 m-auto flex items-center justify-center ${className}`}>
      <div ref={ref} className="bg-middle z-50 rounded-2xl shadow-lg">
        {children}
      </div>
      <div className="fixed inset-0 z-0 bg-black/30 select-none"></div>
    </div>
  );
}
