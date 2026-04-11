import type { IconProps } from '@/presentation/globals/presentation.types';
import { MainSvgBody } from '@/presentation/globals/components/icons/Icons';

export function IconMapRoute(props: IconProps) {
  return (
    <MainSvgBody {...props}>
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
      <path d="M9 12v.01" />
      <path d="M6 13v.01" />
      <path d="M17 15l-4 -4" />
      <path d="M13 15l4 -4" />
    </MainSvgBody>
  );
}
