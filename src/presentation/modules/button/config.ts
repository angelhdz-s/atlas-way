import { tv, type VariantProps } from 'tailwind-variants';

export const buttonClassConfig = tv({
  base: 'cursor-pointer transition-colors',
  variants: {
    rounded: {
      default: 'rounded',
      full: 'rounded-full',
    },
    color: {
      primary:
        'bg-primary fg-strong-dark hover:bg-primary/90',
      primaryOutline:
        'outline-primary fg-strong hover:bg-primary/10 light:hover:outline-primary/60 bg-transparent outline-2 -outline-offset-2',
      secondary:
        'bg-secondary fg-strong hover:bg-secondary/90',
      accent: 'bg-accent text-strong hover:bg-accent/90',
      subtle: 'bg-subtle/20 fg-strong hover:bg-subtle/30',
      subtleOutline:
        'border-secondary fg-secondary hover:bg-secondary hover:fg-strong border bg-transparent',
    },
    size: {
      xs: 'px-2 py-1 text-sm',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
});

export type ButtonVariantProps = VariantProps<
  typeof buttonClassConfig
>;
