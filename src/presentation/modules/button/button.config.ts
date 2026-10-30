import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariant = tv({
  base: 'font-outfit text-txt-action-on-default not-disabled:hover:text-txt-action-on-default-hover before:outline-bd-accesibility-focus disabled:text-txt-base-disabled relative flex cursor-pointer items-center justify-center rounded-full transition-all outline-none before:absolute before:-inset-0.5 before:hidden before:rounded-full before:outline-2 focus-visible:before:block not-disabled:active:scale-95',
  variants: {
    color: {
      primary:
        'bg-sf-action-default not-disabled:hover:bg-sf-action-default-hover disabled:bg-sf-action-disabled',
      subtle:
        'bg-sf-base-solid not-disabled:hover:bg-sf-base-solid-hover disabled:bg-sf-base-disabled',
      outline:
        'border-bd-base-solid not-disabled:hover:border-bd-base-solid-hover disabled:border-bd-base-disabled border',
      simple: '',
    },
    type: {
      default: true,
      icon: 'aspect-square',
    },
    size: {
      sm: 'button-label-small h-8 gap-1 px-3',
      md: 'button-label-medium h-10 gap-2 px-4',
      lg: 'button-label-large h-12 gap-2 px-6',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      type: 'icon',
      size: 'sm',
      class: 'w-8 px-0',
    },
    {
      type: 'icon',
      size: 'md',
      class: 'w-10 px-0',
    },
    {
      type: 'icon',
      size: 'lg',
      class: 'w-12 px-0',
    },
  ],
  defaultVariants: {
    type: 'default',
    size: 'md',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
