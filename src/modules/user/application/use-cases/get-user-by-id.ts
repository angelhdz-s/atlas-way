import type { UseCase } from '@/shared/application/shared.use-case';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { IUserRepository } from '@/modules/user/domain/user.repository';

export class GetUserById implements UseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: UserProps['id']) {
    return await this.repository.findById(id);
  }
}
