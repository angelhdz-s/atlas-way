import { NewUser, UpdateUser, User } from '@/modules/user/domain/user.entity';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { UserMapper } from '@/modules/user/infrastructure/user.mapper';
import { createId } from '@paralleldrive/cuid2';

export class UserPrismaRepository implements IUserRepository {
	async create(data: NewUser): Promise<User> {
		const persistenceData = UserMapper.toPersistence(data);

		const userId = createId();
		persistenceData.id = userId;

		const created = await prisma.users.create({
			data: persistenceData,
		});

		return UserMapper.toDomain(created);
	}

	async createIfNotExists(data: NewUser): Promise<User | null> {
		const exists = await prisma.users.findUnique({ where: { email: data.email } });
		if (exists) return null;

		const persistenceData = UserMapper.toPersistence(data);
		const userId = createId();
		persistenceData.id = userId;

		const created = await prisma.users.create({
			data: persistenceData,
		});

		return UserMapper.toDomain(created);
	}

	async update(id: User['id'], data: UpdateUser): Promise<User> {
		const persistenceData = UserMapper.toPersistenceUpdate(data);
		const updated = await prisma.users.update({
			data: persistenceData,
			where: { id },
		});

		return UserMapper.toDomain(updated);
	}

	async currentUser(): Promise<User | null> {
		const user = await prisma.users.findFirst();
		return user ? UserMapper.toDomain(user) : null;
	}

	async findAll(): Promise<User[]> {
		const users = await prisma.users.findMany();
		const domainUsers = users.map((user) => UserMapper.toDomain(user));
		return domainUsers;
	}

	async findById(id: User['id']): Promise<User | null> {
		const user = await prisma.users.findUnique({
			where: {
				id,
			},
		});
		return user ? UserMapper.toDomain(user) : null;
	}
	async findByEmail(email: User['email']): Promise<User | null> {
		const user = await prisma.users.findUnique({
			where: {
				email,
			},
		});
		return user ? UserMapper.toDomain(user) : null;
	}
}
