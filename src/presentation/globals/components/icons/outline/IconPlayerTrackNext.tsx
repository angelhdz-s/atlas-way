import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconPlayerTrackNext(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 5v14l8 -7z" />
      <path d="M14 5v14l8 -7z" />
    </IconWrapper>
  );
}
