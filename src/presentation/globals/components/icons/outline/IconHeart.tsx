import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconHeart(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </IconWrapper>
  );
}
