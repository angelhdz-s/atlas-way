import type { IconTypes } from '@/presentation/globals/presentation.types';
import { defaultIconSizeClass, defaultIconStrokeWidth } from './Icons';
import { twMerge } from 'tailwind-merge';

export function DefaultIcon({
  Icon,
  className = '',
  strokeWidth = defaultIconStrokeWidth,
}: {
  Icon: IconTypes;
  className?: string;
  strokeWidth?: string;
}) {
  return <Icon className={twMerge(defaultIconSizeClass, className)} strokeWidth={strokeWidth} />;
}
