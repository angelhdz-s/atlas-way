import { tv, type VariantProps } from 'tailwind-variants';

export const cardVariant = tv({
  base: 'rounded-2xl border p-4',
  variants: {
    border: {
      simple: 'bg-middle border-bd-muted',
      default: 'border-bd-muted light:border-white/50 relative',
      highlighted: 'group relative border-transparent',
    },
    type: {
      dashboard: 'flex flex-col gap-6 p-8 tracking-tight shadow-xl shadow-black/5',
    },
    color: {
      default: 'bg-middle',
      disabled: 'bg-middle border-bd-default opacity-50',
      main: 'from-secondary to-primary fg-strong-dark border-secondary before:from-accent bg-linear-45 bg-radial-[100%_100%_at_25%_25%] before:absolute before:inset-0 before:rounded-xl before:bg-radial-[200%_150%_at_200%_0%] before:to-transparent',
      special: 'bg-accent fg-strong-dark border-accent',
    },
    width: {
      xs: 'w-40',
      sm: 'w-60',
      md: 'w-75',
      lg: 'w-92',
    },
  },
  compoundVariants: [
    {
      border: 'highlighted',
      color: 'default',
      class:
        'before:border-bd-muted light:before:border-middle before:bg-middle bg-transparent before:absolute before:inset-0 before:-z-1 before:rounded-2xl before:border',
    },
    {
      border: 'default',
      color: 'default',
      class:
        'light:before:bg-white before:bg-bd-strong before:absolute before:-inset-0.5 before:-z-1 before:rounded-[17px] before:from-black before:to-black/50 before:mask-radial-[50%_50%] before:mask-radial-from-0 before:mask-radial-to-100% before:mask-radial-at-top-left',
    },
  ],
  defaultVariants: {
    border: 'default',
    color: 'default',
  },
});

export type CardVariantProps = VariantProps<typeof cardVariant>;
