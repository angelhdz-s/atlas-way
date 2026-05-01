import { User } from '@/modules/user/domain/user.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { UserDTO } from '@/modules/user/application/dtos/user.dto';
import type {
  UserPrisma,
  UserPrismaCreate,
  UserPrismaUpdate,
} from '@/modules/user/infrastructure/prisma/user.prisma.types';

export class UserMapper {
  static toDomain(data: UserPrisma): User {
    const props: UserProps = {
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      role: {
        id: data.role.id as any,
        name: data.role.name,
      },
    };
    return new User(props);
  }

  static toPersistenceCreate(data: User): UserPrismaCreate {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      role: {
        connect: {
          id: data.role.id,
        },
      },
    };
  }
  static toPersistenceUpdate(data: User): UserPrismaUpdate {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      role: {
        update: {
          id: data.role.id,
        },
      },
    };
  }
  static toDTO(data: User): UserDTO {
    return {
      name: data.name,
      email: data.email,
    };
  }
}
