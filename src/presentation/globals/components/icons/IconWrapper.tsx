import type { IconProps } from '@/presentation/globals/presentation.types';
import { DEFAULT_STROKE_WIDTH } from '@/presentation/globals/constants/icons';

export function IconWrapper({
  children,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  className,
  ariaHidden = true,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={ariaHidden}
    >
      {children}
    </svg>
  );
}
