import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconXMark(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </MainSvgBody>
  );
}
