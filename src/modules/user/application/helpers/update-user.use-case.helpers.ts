import { Success } from '@/shared/domain/result';
import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { User } from '@/modules/user/domain/user.entity';
import type { UserMethods } from '@/modules/user/domain/user.types';
import type { UpdateUserInput } from '@/modules/user/application/dtos/update-user.dto';

type UpdateOperations = {
  [K in keyof UpdateUserInput]: keyof UserMethods;
};

const updateOperations: UpdateOperations = {
  name: 'changeName',
  email: 'changeEmail',
};

export function updateUserProperties(data: UpdateUserInput, user: User): Result<null, DomainError> {
  const dataKeys = Object.keys(data) as (keyof UpdateUserInput)[];
  for (const key of dataKeys) {
    const functionkey = updateOperations[key];
    if (!functionkey || !data[key]) continue;
    const newValue = data[key];
    const updateResult = user[functionkey](newValue);
    if (!updateResult.success) return updateResult;
  }
  return Success(null);
}
