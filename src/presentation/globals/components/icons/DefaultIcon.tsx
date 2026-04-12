import { twMerge } from 'tailwind-merge';
import { DEFAULT_STROKE_WIDTH, DEFAULT_CLASS } from '@/presentation/globals/constants/icons';
import type { IconTypes } from '@/presentation/globals/presentation.types';

export function DefaultIcon({
  Icon,
  className = '',
  strokeWidth = DEFAULT_STROKE_WIDTH,
}: {
  Icon: IconTypes;
  className?: string;
  strokeWidth?: string;
}) {
  return <Icon className={twMerge(DEFAULT_CLASS, className)} strokeWidth={strokeWidth} />;
}
