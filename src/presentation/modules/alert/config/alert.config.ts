import type { AlertConfig } from '@/presentation/modules/alert/alert.types';
import type { AlertVariantProps } from '@/presentation/modules/alert/config/alert.config.variants';

export const ALERT_CONFIG: Record<NonNullable<AlertVariantProps['type']>, AlertConfig> = {
  danger: {
    iconName: 'x',
    role: 'alert',
    ariaLive: 'assertive',
  },
  success: {
    iconName: 'check',
    role: 'status',
    ariaLive: 'polite',
  },
  info: {
    iconName: 'info',
    role: 'status',
    ariaLive: 'polite',
  },
  infoSubtle: {
    iconName: 'info',
    role: 'status',
    ariaLive: 'polite',
  },
  inProgress: {
    iconName: 'circle-dashed',
    role: 'status',
    ariaLive: 'polite',
  },
  warning: {
    iconName: 'triangle-alert',
    role: 'status',
    ariaLive: 'polite',
  },
};
