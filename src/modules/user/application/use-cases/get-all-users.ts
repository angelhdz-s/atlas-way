import type { UseCase } from '@/shared/application/use-case';
import type { IUserRepository } from '@/modules/user/domain/user.repository';

export class GetAllUsers implements UseCase {
  constructor(private repository: IUserRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
