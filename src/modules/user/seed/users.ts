import { Prisma } from '../../../prisma/client';

export const SYSTEM_ID = 'fbd0fb0b-41c0-43d4-823c-c7f32c80819b';
export const ADMIN_ID = '868742e7-ec39-4461-b98e-e73032bf4f91';
export const ROLES: Prisma.RolesCreateManyInput[] = [
	{
		id: 'system',
		name: 'System',
	},
	{
		id: 'admin',
		name: 'Admin',
	},
	{
		id: 'base',
		name: 'Base User',
	},
];
export const USERS: Prisma.UsersCreateManyInput[] = [
	{
		id: SYSTEM_ID,
		email: 'atlasway@corporation.com',
		name: 'System',
		roleId: 'system',
	},
	{
		id: ADMIN_ID,
		email: 'admin@dev.com',
		name: 'Angel Admin',
		roleId: 'admin',
	},
];
