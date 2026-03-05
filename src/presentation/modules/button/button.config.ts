import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariant = tv({
  base: 'flex w-fit cursor-pointer items-center gap-2 rounded-(--rounding) py-0.5 whitespace-nowrap transition-colors [--rounding:8px] disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    color: {
      primary:
        'bg-primary fg-strong-dark hover:bg-primary/90',
      primaryDeluxe: twMerge(
        'fg-strong-dark to-primary from-secondary from-10%',
        'bg-primary shadow-[0px_0px_30px_0px_var(--color-primary)]/80 hover:shadow-[0px_0px_30px_0px_var(--color-primary)]/50',
        'hover:bg-amber-900',
        'relative before:absolute before:-inset-0.5 before:-z-1 before:rounded-[calc(var(--rounding)+2px)]',
        'before:to-primary before:from-primary before:via-accent light:before:via-white before:bg-linear-10'
      ),
      subtle: 'bg-subtle/20 fg-default hover:bg-subtle/30',
      simple: twMerge(
        'fg-default hover:fg-muted hover:bg-bd-muted/50 border border-transparent bg-transparent',
        'light:hover:bg-black/3'
      ),
    },
    type: {
      normal: true,
      square: 'aspect-square',
    },
    size: {
      xxs: 'h-5 px-1 text-xs [--rounding:5px]',
      xs: 'h-7 px-3 text-sm [--rounding:6px]',
      sm: 'h-8 px-4 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-12 px-7 text-lg [--rounding:12px]',
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

export type ButtonVariantProps = VariantProps<
  typeof buttonVariant
>;
