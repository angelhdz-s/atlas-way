import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { RoutineMethods } from '@/modules/routine/domain/routine.types';
import type { UpdateRoutineInput } from '@/modules/routine/application/dtos/update-routine.dto';
import type { Routine } from '@/modules/routine/domain/routine.entity';
import { Success } from '@/shared/domain/result';

type UpdateOperations = {
  [K in keyof UpdateRoutineInput]: keyof RoutineMethods;
};

const updateOperations: UpdateOperations = {
  name: 'changeName',
  description: 'changeDescription',
  active: 'changeActive',
  cycleId: 'changeCycle',
  days: 'changeDays',
  initialDate: 'changeInitialDate',
};

export function updateRoutineProperties(
  data: UpdateRoutineInput,
  routine: Routine
): Result<null, DomainError> {
  const dataKeys = Object.keys(data) as (keyof UpdateRoutineInput)[];
  for (const key of dataKeys) {
    const functionkey = updateOperations[key];
    if (!functionkey || !data[key]) continue;
    const newValue = data[key] as never;
    const updateResult = routine[functionkey](newValue);
    if (!updateResult.success) return updateResult;
  }
  return Success(null);
}
