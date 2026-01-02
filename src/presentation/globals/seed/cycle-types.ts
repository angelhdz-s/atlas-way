import { Prisma } from '../../../prisma/client';

export const ROUTINE_CYCLES: Prisma.RoutineCycleTypesCreateManyInput[] = [
	{
		id: 'week',
		name: 'Week',
	},
	{
		id: 'custom',
		name: 'Custom',
	},
];
