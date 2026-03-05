'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export function Modal({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    router.back();
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        router.back();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () =>
      document.removeEventListener('keydown', handleEscape);
  }, [router]);

  return (
    <div
      className={`fixed inset-0 z-50 m-auto flex items-center justify-center ${className}`}
    >
      <div className="bg-middle z-50 rounded-2xl shadow-lg">
        {children}
      </div>
      <div
        className="fixed inset-0 z-0 bg-black/30 select-none"
        onClick={handleClick}
      ></div>
    </div>
  );
}
