import type { UseCase } from '@/shared/application/use-case';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { UserProps } from '@/modules/user/domain/user.types';

export class GetUserByEmail implements UseCase {
  constructor(private repository: IUserRepository) {}

  async execute(email: UserProps['email']) {
    return await this.repository.findByEmail(email);
  }
}
