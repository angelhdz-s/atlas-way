import { tv, type VariantProps } from 'tailwind-variants';

export const alertVariant = tv({
  base: 'flex items-center gap-1 transition-colors',
  variants: {
    type: {
      success: 'text-txt-success-default',
      info: 'text-txt-information-default',
      infoSubtle: 'text-txt-base-caption',
      inProgress: 'text-txt-in-progress-default',
      warning: 'text-txt-warning-default',
      danger: 'text-txt-danger-default',
    },
  },
});

export type AlertVariantProps = VariantProps<typeof alertVariant>;
