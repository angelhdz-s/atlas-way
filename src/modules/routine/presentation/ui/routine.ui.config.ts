import { tv } from 'tailwind-variants';

export const routineDayItemClassConfig = tv({
  base: 'flex h-8 w-17 items-center justify-center gap-1 rounded border px-2 text-center transition-colors',
  variants: {
    status: {
      canceled: 'light:border-red-300 light:text-red-400 border-red-950 text-red-800',
      completed: 'light:border-green-400 light:text-green-600 border-green-950 text-green-800',
      current: 'fg-strong light:bg-green-600 light:border-green-600 border-green-800 bg-green-800',
      next: 'border-subtle/50 fg-strong',
    },
    type: {
      rest: 'opacity-50',
      training: '',
      recovery: '',
      yoga: '',
    },
  },
});
