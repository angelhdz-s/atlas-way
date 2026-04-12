import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconZZ(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-6 8h6" />
    </IconWrapper>
  );
}
