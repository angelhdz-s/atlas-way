import { tv, type VariantProps } from 'tailwind-variants';

export const cardClassesConfig = tv({
  base: 'bg-middle border-bd-muted rounded-xl border p-4',
  variants: {
    type: {
      dashboard:
        'flex flex-col gap-6 p-8 tracking-tight shadow-xl shadow-black/5',
    },
    color: {
      disabled: 'bg-middle border-bd-default opacity-50',
      main: 'from-secondary to-primary fg-strong-dark before:from-accent relative bg-linear-45 bg-radial-[100%_100%_at_25%_25%] before:absolute before:inset-0 before:rounded-xl before:bg-radial-[100%_100%_at_100%_0%] before:to-transparent',
      special: 'bg-accent fg-strong-dark border-accent',
    },
    width: {
      xs: 'w-40',
      sm: 'w-60',
      md: 'w-75',
      lg: 'w-92',
    },
  },
});

export type CardVariantProps = VariantProps<
  typeof cardClassesConfig
>;
