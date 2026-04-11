import type { IconProps } from '@/presentation/globals/presentation.types';
import { IconWrapper } from '@/presentation/globals/components/icons/IconWrapper';

export function IconCirclePlus(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </IconWrapper>
  );
}
