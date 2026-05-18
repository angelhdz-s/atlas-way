import { Failure } from '@/shared/domain/result';
import { User } from '@/modules/user/domain/user.entity';
import { UserEmailAlreadyExists } from '@/modules/user/domain/errors/user.errors';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';

export class CreateUser implements UseCase {
  constructor(
    private repository: IUserRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateUserInput) {
    const userByEmailResult = await this.repository.findByEmail(data.email);
    if (!userByEmailResult.success) return userByEmailResult;
    if (userByEmailResult.data) return Failure(new UserEmailAlreadyExists());

    const idResult = this.generator.generate();
    if (!idResult.success) return idResult;

    const userId = idResult.data;

    const newUserResult = User.create(userId, {
      email: data.email,
      name: data.name,
      roleId: data.roleId,
    });

    if (!newUserResult.success) return newUserResult;

    const newUser = newUserResult.data;

    return await this.repository.create(newUser);
  }
}
