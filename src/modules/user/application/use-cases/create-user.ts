import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';
import { User } from '@/modules/user/domain/user.entity';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateUser implements UseCase {
  constructor(
    private repository: IUserRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateUserInput) {
    const id = this.generator.generate();

    const user = User.create(id, {
      email: data.email,
      name: data.name,
      roleId: data.roleId,
    });

    return await this.repository.create(user);
  }
}
