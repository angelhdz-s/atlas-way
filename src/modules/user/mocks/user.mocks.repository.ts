import { Failure, Success } from '@/shared/domain/result';
import { User } from '@/modules/user/domain/user.entity';
import { UserNotFoundError } from '@/modules/user/domain/errors/user.errors';
import { USERS_MOCK } from '@/modules/user/mocks/user.mocks.entities';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { IUserRepository } from '@/modules/user/domain/user.repository';

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
    const users = this.users;
    const usersCopy = this.getCopies(users);
    return Success(usersCopy);
  }
  async findByEmail(email: UserProps['email']) {
    const user = this.users.find((u) => u.email === email);
    if (!user) return Success(null);

    const userCopy = this.getCopy(user);
    return Success(userCopy);
  }
  async findById(id: UserProps['id']) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return Success(null);

    const userCopy = this.getCopy(user);
    return Success(userCopy);
  }
  async update(data: User) {
    const userIndex = this.users.findIndex((u) => u.id === data.id);
    if (userIndex === -1) return Failure(new UserNotFoundError());
    this.users[userIndex] = data;
    return Success(data);
  }

  private getCopy(user: User): User {
    const userProps: UserProps = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return new User(userProps);
  }

  private getCopies(users: User[]): User[] {
    const userCopies = users.map((u) => this.getCopy(u));
    return userCopies;
  }
}
