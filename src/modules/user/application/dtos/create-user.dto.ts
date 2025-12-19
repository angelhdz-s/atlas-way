import { UserProps } from '../../domain/user.types';

export type CreateUserInput = Pick<UserProps, 'name' | 'email' | 'roleId'>;
