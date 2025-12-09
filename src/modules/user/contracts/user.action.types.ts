import { User } from '../domain/user.entity';

export type UserActionResponse = Promise<{
	success: boolean;
	message: string;
	data: User | null;
}>;

export type UsersActionResponse = Promise<{
	success: boolean;
	message: string;
	data: User[];
}>;
