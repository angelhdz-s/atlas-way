import { Users as PrismaUser } from '@/prisma/client';
import { User } from '../domain/user.entity';
import { UserProps } from '../domain/user.types';
import { UserDTO } from '../application/dtos/user.dto';

export class UserMapper {
	static toDomain(data: PrismaUser): User {
		const props: UserProps = {
			id: data.id,
			name: data.name,
			email: data.email,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			roleId: data.roleId,
		};
		return new User(props);
	}

	static toPersistence(data: User): PrismaUser {
		return {
			id: data.id,
			name: data.name,
			email: data.email,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			roleId: data.roleId,
		};
	}
	static toDTO(data: User): UserDTO {
		return {
			name: data.name,
			email: data.email,
		};
	}
}
