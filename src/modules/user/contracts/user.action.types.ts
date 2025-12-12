import { User } from '../domain/user.entity';
import { UserProps } from '../domain/user.schema';

export type UserActionResponse = Promise<{
	success: boolean;
	message: string;
	data: User | UserProps | null;
}>;

export type UsersActionResponse = Promise<{
	success: boolean;
	message: string;
	data: User[];
}>;
