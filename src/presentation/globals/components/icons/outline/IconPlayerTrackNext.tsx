import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconPlayerTrackNext(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M3 5v14l8 -7z" />
      <path d="M14 5v14l8 -7z" />
    </MainSvgBody>
  );
}
