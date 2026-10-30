import { tv, type VariantProps } from 'tailwind-variants';

export const pageContainerVariant = tv({
  base: 'space-y-8 overflow-y-auto',
  variants: {
    width: {
      compact: 'mx-auto w-248',
      default: 'w-full',
    },
  },
  defaultVariants: {
    width: 'default',
  },
});

export type PageContainerVariantProps = VariantProps<typeof pageContainerVariant>;
