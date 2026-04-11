import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconTrendingUp(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </MainSvgBody>
  );
}
