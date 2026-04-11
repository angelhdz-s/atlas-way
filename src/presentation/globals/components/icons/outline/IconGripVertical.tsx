import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconGripVertical(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </IconWrapper>
  );
}
