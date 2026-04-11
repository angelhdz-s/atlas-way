import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconTrendingDown(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 7l6 6l4 -4l8 8" />
      <path d="M21 10l0 7l-7 0" />
    </IconWrapper>
  );
}
