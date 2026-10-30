import { tv, type VariantProps } from 'tailwind-variants';

export const tagVariant = tv({
  base: 'caption h-6 gap-1 rounded-full px-2 ring',
  variants: {
    color: {
      default: 'bg-sf-base-default ring-bd-base-subtle text-txt-base-caption',
      success: 'bg-sf-success-default ring-bd-success-default text-txt-success-on-default',
      information:
        'bg-sf-information-default ring-bd-information-default text-txt-information-on-default',
      inProgress:
        'bg-sf-in-progress-default ring-bd-in-progress-default text-txt-in-progress-on-default',
      warning: 'bg-sf-warning-default ring-bd-warning-default text-txt-warning-on-default',
      danger: 'bg-sf-danger-default ring-bd-danger-default text-txt-danger-on-default',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type TagVariant = VariantProps<typeof tagVariant>;
