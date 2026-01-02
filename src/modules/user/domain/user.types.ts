import { Role } from '@/modules/role/domain/role.types';
import { readonly } from 'zod';

export type UserProps = {
	readonly id: string;
	name: string;
	email: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly roleId: Role['id'];
};
