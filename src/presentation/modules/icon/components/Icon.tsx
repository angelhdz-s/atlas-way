import type { DynamicIcon } from 'lucide-react/dynamic';
import {
  iconVariant,
  type IconVariant,
} from '@/presentation/modules/icon/config/icon.config.variants';
import { twMerge } from 'tailwind-merge';
import { getMappedIcon } from '@/presentation/modules/icon/icon.utils';

type DynamicIconProps = React.ComponentProps<typeof DynamicIcon>;
export type IconName = DynamicIconProps['name'];

type Props = {
  className?: string;
  ariaHidden?: boolean;
  variant?: IconVariant;
  icon: IconName;
};

export function Icon({ className, ariaHidden = true, icon, variant }: Props) {
  const iconVariantClass = iconVariant(variant);

  const Icon = getMappedIcon(icon);

  return (
    <Icon
      name={icon}
      absoluteStrokeWidth
      aria-hidden={ariaHidden}
      className={twMerge(iconVariantClass, className)}
    />
  );
}
