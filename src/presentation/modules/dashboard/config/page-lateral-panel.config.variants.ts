import { tv, type VariantProps } from 'tailwind-variants';

export const pageLateralPanelVariant = tv({
  base: 'space-y-8',
  variants: {
    width: {
      compact: 'w-64',
      default: 'w-96',
    },
  },
  defaultVariants: {
    width: 'default',
  },
});

export type PageLateralPanelVariantProps = VariantProps<typeof pageLateralPanelVariant>;
