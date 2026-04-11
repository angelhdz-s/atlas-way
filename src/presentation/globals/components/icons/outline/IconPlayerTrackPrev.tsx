import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconPlayerTrackPrev(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 5v14l-8 -7l8 -7" />
      <path d="M10 5v14l-8 -7l8 -7" />
    </IconWrapper>
  );
}
