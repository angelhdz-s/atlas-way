import { Failure, Success } from '@/shared/domain/result';
import { USERS_MOCK } from '@/modules/user/mocks/user.mocks.entities';
import type { User } from '@/modules/user/domain/user.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import { UserNotFoundError } from '../domain/errors/user.errors';

/**
 * An in-memory mock implementation of IUserRepository for testing purposes.
 *
 * @property users: An array of User entities, initialized with 10 mock users by default.
 */
export class InMemoryUserRepository implements IUserRepository {
  public users: User[] = [...USERS_MOCK];
  async create(data: User) {
    this.users.push(data);
    return Success(data);
  }
  async findAll() {
    return Success(this.users);
  }
  async findByEmail(email: UserProps['email']) {
    const user = this.users.find((u) => u.email === email);
    return Success(user ?? null);
  }
  async findById(id: UserProps['id']) {
    const user = this.users.find((u) => u.id === id);
    return Success(user ?? null);
  }
  async update(data: User) {
    const userIndex = this.users.findIndex((u) => u.id === data.id);
    if (userIndex === -1) return Failure(new UserNotFoundError());
    this.users[userIndex] = data;
    return Success(data);
  }
}
