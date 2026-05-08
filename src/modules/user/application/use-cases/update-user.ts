import { Failure } from '@/shared/domain/result';
import { UserNotFoundError } from '@/modules/user/domain/errors/user.errors';
import { updateUserProperties } from '@/modules/user/application/helpers/update-user.use-case.helpers';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { UpdateUserInput } from '@/modules/user/application/dtos/update-user.dto';

export class UpdateUser implements UseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: UserProps['id'], data: UpdateUserInput) {
    const userResult = await this.repository.findById(id);

    if (!userResult.success) return userResult;
    if (!userResult.data) return Failure(new UserNotFoundError());
    const user = userResult.data;

    const updateUserResult = updateUserProperties(data, user);
    if (!updateUserResult.success) return updateUserResult;

    return await this.repository.update(user);
  }
}
