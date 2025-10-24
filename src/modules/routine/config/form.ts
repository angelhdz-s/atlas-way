import { ROUTINE_CYCLES } from '@/modules/globals/seed/cycle-types';

export const daysOptions = ROUTINE_CYCLES.map((cycle) => ({
	value: cycle.id,
	label: cycle.name,
}));
