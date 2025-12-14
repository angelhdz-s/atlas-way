import { NewUser, UpdateUser, User } from './user.entity';

export interface IUserRepository {
	create: (data: NewUser) => Promise<User>;
	createIfNotExists: (data: NewUser) => Promise<User | null>;
	update: (id: string, data: UpdateUser) => Promise<User>;
	findAll: () => Promise<User[]>;
	findById: (id: string) => Promise<User | null>;
	findByEmail: (email: string) => Promise<User | null>;

	currentUser: () => Promise<User | null>;
}
