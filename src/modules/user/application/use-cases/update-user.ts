import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { UseCase } from '@/shared/application/use-case';
import type { UpdateUserInput } from '../dtos/update-user.dto';
import type { UserProps } from '../../domain/user.types';
import { Failure } from '@/shared/domain/result';
import { UserNotFoundError } from '../../domain/errors/user.errors';

export class UpdateUser implements UseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: UserProps['id'], data: UpdateUserInput) {
    const userResult = await this.repository.findById(id);

    if (!userResult.success || !userResult.data) return Failure(new UserNotFoundError());
    const user = userResult.data;

    if (data.name) user.changeName(data.name);
    if (data.email) user.changeEmail(data.email);
    return await this.repository.update(user);
  }
}
