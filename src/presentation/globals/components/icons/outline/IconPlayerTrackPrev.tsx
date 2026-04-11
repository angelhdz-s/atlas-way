import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconPlayerTrackPrev(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M21 5v14l-8 -7l8 -7" />
      <path d="M10 5v14l-8 -7l8 -7" />
    </MainSvgBody>
  );
}
