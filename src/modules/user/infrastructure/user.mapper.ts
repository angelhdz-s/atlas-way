import { Users as PrismaUser, Prisma } from '@/prisma/client';
import { User as DomainUser, NewUser, UpdateUser, User } from '../domain/user.entity';
import { UserProps } from '../domain/user.schema';

export class UserMapper {
	static toDomain(user: PrismaUser): DomainUser {
		const props: UserProps = {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
		return new DomainUser(props);
	}

	static toPersistence(user: NewUser): Prisma.UsersCreateInput {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
		};
	}

	static toPersistenceUpdate(user: UpdateUser): Prisma.UsersUpdateInput {
		const updateData: Prisma.UsersUpdateInput = {};

		if (user.name !== undefined) updateData.name = user.name;
		if (user.email !== undefined) updateData.email = user.email;

		return updateData;
	}

	static toDTO(user: User): UserProps {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
	}
}
