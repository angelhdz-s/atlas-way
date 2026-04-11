import type { IconProps } from '@/presentation/globals/presentation.types';
import { defaultIconStrokeWidth } from './Icons';

export function IconWrapper({
  children,
  strokeWidth = defaultIconStrokeWidth,
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
