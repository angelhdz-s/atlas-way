import { tv, type VariantProps } from 'tailwind-variants';

export const pageLateralPanelVariant = tv({
  base: 'space-y-8',
  variants: {
    size: {
      thin: 'w-64',
      default: 'w-96',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type PageLateralPanelVariantProps = VariantProps<typeof pageLateralPanelVariant>;
