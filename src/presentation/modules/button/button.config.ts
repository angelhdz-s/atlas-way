import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariant = tv({
  base: 'text-strong flex w-fit cursor-pointer items-center gap-2 rounded-full py-0.5 whitespace-nowrap transition-colors [--rounding:10px] disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    color: {
      primary: 'bg-primary text-strong-dark hover:bg-primary/90',
      subtle: 'bg-subtle/20 hover:text-muted',
      simple: twMerge(
        'hover:text-muted hover:bg-bd-muted/50 border border-transparent bg-transparent',
        'light:hover:bg-black/3'
      ),
    },
    type: {
      normal: true,
      square: 'aspect-square',
    },
    size: {
      xs: 'h-8 px-4 text-sm',
      sm: 'h-9 px-5 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-11 px-6 text-base',
    },
  },
  compoundVariants: [
    {
      type: 'square',
      class: 'justify-center p-0',
    },
  ],
  defaultVariants: {
    type: 'normal',
    size: 'md',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
