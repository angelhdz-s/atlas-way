import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconArrowUp(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </MainSvgBody>
  );
}
