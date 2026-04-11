import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '@/presentation/globals/components/icons/Icons';

export function IconZZ(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-6 8h6" />
    </MainSvgBody>
  );
}
