import { Prisma } from '../../../prisma/client';

export const ADMIN_ID = '868742e7-ec39-4461-b98e-e73032bf4f91';
export const COMMON_USER_ID = '7e994ed6-5708-484f-96db-60cd2e7f0c4e';

export const USERS: Prisma.UsersCreateManyInput[] = [
	{
		id: ADMIN_ID,
		email: 'admin@dev.com',
		name: 'Angel Admin',
	},
	{
		id: COMMON_USER_ID,
		email: 'angel@example.com',
		name: 'Angel Hdz. Sotelo',
	},
];
