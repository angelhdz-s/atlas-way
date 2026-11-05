import { ALERT_CONFIG } from '@/presentation/modules/alert/config/alert.config';
import {
  alertVariant,
  type AlertVariantProps,
} from '@/presentation/modules/alert/config/alert.config.variants';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import type { NonEmptyString } from '@/shared/shared.types';
import { twMerge } from 'tailwind-merge';

type Props = AlertVariantProps & {
  className?: string;
  label: NonEmptyString<string>;
};

export function Alert({ className, type, label }: Props) {
  const variantClassName = alertVariant({ type });

  const alertConfig = ALERT_CONFIG[type ?? 'infoSubtle'] ?? ALERT_CONFIG.infoSubtle;

  const { iconName, ariaLive, role } = alertConfig;

  return (
    <div className={twMerge(variantClassName, className)} role={role} aria-live={ariaLive}>
      <Icon icon={iconName} variant={{ size: 'sm', weight: 'thin' }} />
      <span className="caption">{label}</span>
    </div>
  );
}
