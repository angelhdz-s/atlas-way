import { Prisma } from '../../../prisma/client';

export const STATUS: Prisma.StatusCreateManyInput[] = [
	{
		id: 'completed',
		name: 'Completed',
	},
	{
		id: 'canceled',
		name: 'Canceled',
	},
	{
		id: 'pending',
		name: 'Pending',
	},
];
