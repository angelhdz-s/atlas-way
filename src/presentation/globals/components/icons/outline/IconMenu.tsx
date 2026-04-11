import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconMenu(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </MainSvgBody>
  );
}
