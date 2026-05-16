import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { SessionMethods } from '@/modules/session/domain/session.types';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';
import type { Session } from '@/modules/session/domain/session.entity';
import { Success } from '@/shared/domain/result';

type UpdateOperations = {
  [K in keyof UpdateSessionInput]: keyof SessionMethods;
};

const updateOperations: UpdateOperations = {
  name: 'changeName',
  description: 'changeDescription',
};

export function updateSessionProperties(
  data: UpdateSessionInput,
  routine: Session
): Result<null, DomainError> {
  const dataKeys = Object.keys(data) as (keyof UpdateSessionInput)[];
  for (const key of dataKeys) {
    const methodKey = updateOperations[key];
    if (!methodKey || !data[key]) continue;
    const newValue = data[key] as never;
    const updateResult = routine[methodKey](newValue);
    if (!updateResult.success) return updateResult;
  }
  return Success(null);
}
