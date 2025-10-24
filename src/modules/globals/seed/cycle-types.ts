import { RoutineCycleTypes } from '@/prisma/client';

export const ROUTINE_CYCLES: RoutineCycleTypes[] = [
	{
		id: 'week',
		name: 'Week',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 'custom',
		name: 'Custom',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
