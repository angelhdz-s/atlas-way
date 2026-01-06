import { UserProps } from '../../domain/user.types';

export type UserDTO = Pick<UserProps, 'name' | 'email'>;
