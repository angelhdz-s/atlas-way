import { ROUTINE_CYCLES } from '@/presentation/globals/seed/cycle-types';

export const cycleOptions = ROUTINE_CYCLES.map((cycle) => ({
  value: cycle.id,
  label: cycle.name,
}));
