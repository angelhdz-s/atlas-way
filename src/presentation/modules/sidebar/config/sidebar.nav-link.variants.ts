import { tv, type VariantProps } from 'tailwind-variants';

export const sidebarNavLinkVariants = tv({
  base: 'group text-fg-strong hover:text-fg-default relative mx-auto grid aspect-square h-10 w-10 place-content-center justify-center rounded-lg font-light transition-colors lg:mx-auto lg:flex lg:aspect-auto lg:w-full lg:place-content-start lg:items-center lg:gap-2 lg:px-4',
  variants: {
    active: {
      true: 'bg-primary text-fg-strong-dark hover:text-fg-strong-dark',
    },
    notice: {
      unread:
        'before:bg-unread before:absolute before:top-2.5 before:left-5.5 before:z-1 before:size-2.5 before:rounded-full lg:before:inset-y-0 lg:before:right-4 lg:before:left-auto lg:before:my-auto',
    },
  },
  compoundVariants: [
    {
      active: true,
      notice: 'unread',
      class: 'before:bg-strong-dark',
    },
  ],
});

export type SidebarNavLinkVariant = VariantProps<typeof sidebarNavLinkVariants>;
