import { tv } from 'tailwind-variants';

export const iconVariant = tv({
  variants: {
    button: {
      xs: 'size-5 stroke-2',
      sm: 'size-5 stroke-2',
      md: 'size-6 stroke-2',
      lg: 'size-6 stroke-2',
    },
  },

  defaultVariants: {
    button: 'md',
  },
});
