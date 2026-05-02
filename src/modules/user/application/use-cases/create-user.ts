import { User } from '@/modules/user/domain/user.entity';
import { ROLES } from '@/modules/user/domain/user.constants.roles';
import { Failure } from '@/shared/domain/result';
import { RoleNotFound } from '@/modules/user/domain/errors/user.errors';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateUser implements UseCase {
  constructor(
    private repository: IUserRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateUserInput) {
    const id = this.generator.generate();

    const role = Object.values(ROLES).find((r) => r.id === data.roleId);

    if (!role) return Failure(new RoleNotFound());

    const user = User.create(id, {
      email: data.email,
      name: data.name,
      role,
    });

    return await this.repository.create(user);
  }
}
