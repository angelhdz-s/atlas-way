import { Prisma } from '../../../prisma/client';
export const DAY_TYPES: Prisma.DayTypesCreateManyInput[] = [
	{
		id: 'training',
		name: 'Training',
	},
	{
		id: 'rest',
		name: 'Rest',
	},
];
