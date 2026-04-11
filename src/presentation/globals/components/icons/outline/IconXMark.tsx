import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconXMark(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </IconWrapper>
  );
}
