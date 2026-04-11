import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconRouteX(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 17l4 4" />
      <path d="M7 17l-4 4" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
      <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </IconWrapper>
  );
}
