import { Status } from '@/prisma/client';

export const STATUS: Status[] = [
	{
		id: 'completed',
		name: 'Completed',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 'canceled',
		name: 'Canceled',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 'pending',
		name: 'Pending',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
