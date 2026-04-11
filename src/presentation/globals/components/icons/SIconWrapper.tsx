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
