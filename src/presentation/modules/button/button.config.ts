import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariant = tv({
  base: 'flex w-fit cursor-pointer items-center gap-2 rounded-full py-0.5 font-medium whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    color: {
      primary: 'bg-primary text-fg-strong-dark hover:bg-primary/90 bg-linear-45',
      subtle: 'text-fg-strong bg-fill-top hover:text-fg-subtle',
      outline: 'text-fg-strong hover:text-fg-subtle hover:bg-fill-top ring-bd-strong ring-1',
      simple: 'text-fg-strong hover:text-fg-subtle',
      muted: 'text-fg-muted hover:text-fg-default',
      danger: 'text-danger bg-danger-fill hover:text-danger/80 hover:bg-danger-fill/50',
    },
    type: {
      text: true,
      icon: 'aspect-square',
      square: 'aspect-square',
      iconText: 'gap',
    },
    size: {
      xs: 'h-8 px-4 text-sm',
      sm: 'h-9 px-5 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-11 px-6 text-base',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  compoundVariants: [
    {
      type: 'square',
      class: 'justify-center p-0',
    },
    {
      type: 'icon',
      class: 'justify-center p-0',
    },
  ],
  defaultVariants: {
    type: 'text',
    size: 'md',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
