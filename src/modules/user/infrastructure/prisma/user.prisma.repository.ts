import { User } from '@/modules/user/domain/user.entity';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { UserMapper } from '@/modules/user/infrastructure/user.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';

export class UserPrismaRepository implements IUserRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async create(data: User) {
		const persistenceData = UserMapper.toPersistence(data);

		try {
			const created = await this.prisma.users.create({
				data: persistenceData,
			});
			const domainUser = UserMapper.toDomain(created);
			return Success(domainUser);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}

	async update(data: User) {
		const persistenceData = UserMapper.toPersistence(data);
		try {
			const updated = await this.prisma.users.update({
				data: persistenceData,
				where: { id: persistenceData.id },
			});

			const domainUser = UserMapper.toDomain(updated);
			return Success(domainUser);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}

	async findAll() {
		try {
			const users = await this.prisma.users.findMany();
			const domainUsers = users.map((user) => UserMapper.toDomain(user));
			return Success(domainUsers);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}

	async findById(id: User['id']) {
		try {
			const user = await this.prisma.users.findUnique({
				where: {
					id,
				},
			});
			return Success(user ? UserMapper.toDomain(user) : null);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}
	async findByEmail(email: User['email']) {
		try {
			const user = await this.prisma.users.findUnique({
				where: {
					email,
				},
			});
			return Success(user ? UserMapper.toDomain(user) : null);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}
}
