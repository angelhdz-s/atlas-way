import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { User } from './user.entity';
import type { UserProps } from './user.types';

export interface IUserRepository {
  create: (data: User) => RepositoryResult<User>;
  update: (data: User) => RepositoryResult<User | null>;
  findAll: () => RepositoryResult<User[]>;
  findById: (
    id: UserProps['id']
  ) => RepositoryResult<User | null>;
  findByEmail: (
    email: UserProps['email']
  ) => RepositoryResult<User | null>;
}
