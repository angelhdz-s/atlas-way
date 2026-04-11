import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '../Icons';

export function IconLayoutSidebar(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4l0 16" />
    </MainSvgBody>
  );
}
