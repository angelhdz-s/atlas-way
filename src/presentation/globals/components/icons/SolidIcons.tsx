import type { SIconProps } from '@/presentation/globals/presentation.types';

export function SIconWrapper({
  children,
  className,
  ariaHidden = true,
}: SIconProps & {
  children: React.ReactNode;
}) {
  return (
    <svg
      fill="currentColor"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={ariaHidden}
    >
      {children}
    </svg>
  );
}

export function IconSolidCircleCheck({ className = '' }: { className?: string }) {
  return (
    <SIconWrapper className={className}>
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </SIconWrapper>
  );
}

export function IconSolidCircleX({ className = '' }: { className?: string }) {
  return (
    <SIconWrapper className={className}>
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
    </SIconWrapper>
  );
}
