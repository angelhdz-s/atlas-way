import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconTrendingUp(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </IconWrapper>
  );
}
