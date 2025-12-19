import { UserProps } from '../../domain/user.types';

export type UpdateUserInput = {
	name?: UserProps['name'];
	email?: UserProps['email'];
};
