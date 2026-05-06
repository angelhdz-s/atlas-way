import { Failure } from '@/shared/domain/result';
import { User } from '@/modules/user/domain/user.entity';
import { ROLES } from '@/modules/user/domain/user.constants.roles';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { RoleNotFound } from '@/modules/user/domain/errors/user.errors';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';

export class CreateUser implements UseCase {
  constructor(
    private repository: IUserRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateUserInput) {
    const id = this.generator.generate();
    const role = Object.values(ROLES).find((r) => r.id === data.roleId);
    if (!role) return Failure(new RoleNotFound());

    const userByEmailResult = await this.repository.findByEmail(data.email);
    if (!userByEmailResult.success) return userByEmailResult;
    if (userByEmailResult.data) return Failure(new TechnicalError()); // more User exceptions needed

    const user = User.create(id, {
      email: data.email,
      name: data.name,
      role,
    });

    return await this.repository.create(user);
  }
}
