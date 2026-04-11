import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '@/presentation/globals/components/icons/Icons';

export function IconPlus(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </MainSvgBody>
  );
}
