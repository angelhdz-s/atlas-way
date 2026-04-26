import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const cardVariant = tv({
  base: twMerge(
    'relative rounded-(--rounded) border border-transparent p-4 [--rounded:1rem]',
    'before:absolute before:inset-px before:-z-1 before:rounded-[calc(var(--rounded)-1px)]',
    'after:border-bd-strong after:pointer-events-none after:absolute after:inset-0 after:z-0 after:rounded-(--rounded) after:border',
    'light:after:mask-linear-340 after:mask-linear-160 after:mask-linear-from-black after:mask-linear-from-0% after:mask-linear-to-black/30 after:mask-linear-to-50%'
  ),
  variants: {
    border: {
      highlighted: 'group',
    },
    type: {
      dashboard: 'flex flex-col gap-6 p-8 tracking-tight shadow-xl shadow-black/2',
    },
    color: {
      default: 'before:bg-fill-base',
      disabled: 'before:bg-fill-base border-bd-default opacity-50',
      main: 'bg-primary text-strong-dark before:from-accent bg-linear-45 bg-radial-[100%_100%_at_25%_25%] before:absolute before:inset-0 before:rounded-xl before:bg-radial-[200%_150%_at_200%_0%] before:to-transparent after:border-transparent',
      special: 'bg-accent text-strong-dark border-accent',
    },
    width: {
      xs: 'w-40',
      sm: 'w-60',
      md: 'w-75',
      lg: 'w-92',
    },
  },

  defaultVariants: {
    color: 'default',
  },
});

export type CardVariantProps = VariantProps<typeof cardVariant>;
