import { tv, type VariantProps } from 'tailwind-variants';

export const iconVariant = tv({
  base: 'aspect-square',
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
    weight: {
      thin: 'stroke-1',
      moderate: 'stroke-[1.5]',
      medium: 'stroke-2',
      thick: 'stroke-4',
    },
  },
  compoundVariants: [
    {
      size: 'md',
      weight: 'thin',
      class: 'stroke-[1.2]',
    },
    {
      size: 'md',
      weight: 'moderate',
      class: 'stroke-[1.7]',
    },
    {
      size: 'md',
      weight: 'medium',
      class: 'stroke-[2.4]',
    },
    {
      size: 'md',
      weight: 'thick',
      class: 'stroke-[4.5]',
    },
    {
      size: 'sm',
      weight: 'thin',
      class: 'stroke-[1.5]',
    },
    {
      size: 'sm',
      weight: 'moderate',
      class: 'stroke-2',
    },
    {
      size: 'sm',
      weight: 'medium',
      class: 'stroke-3',
    },
    {
      size: 'sm',
      weight: 'thick',
      class: 'stroke-6',
    },
  ],
  defaultVariants: {
    size: 'md',
    weight: 'thin',
  },
});

export type IconVariant = VariantProps<typeof iconVariant>;
