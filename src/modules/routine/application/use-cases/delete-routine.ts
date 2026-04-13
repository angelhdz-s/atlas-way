import { Failure } from '@/shared/domain/result';
import {
  RoutineNotFoundError,
  RoutineOwnershipError,
} from '@/modules/routine/domain/errors/routine.errors';
import type { UseCase } from '@/shared/application/use-case';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { UserProps } from '@/modules/user/domain/user.types';

export class DeleteRoutine implements UseCase {
  constructor(private repository: IRoutineRepository) {}

  async execute(exerciseId: RoutineProps['id'], userId: UserProps['id']) {
    const exerciseResult = await this.repository.findById(exerciseId);
    if (!exerciseResult.success) return exerciseResult;
    if (!exerciseResult.data) return Failure(new RoutineNotFoundError());
    if (exerciseResult.data.userId !== userId) return Failure(new RoutineOwnershipError());
    return this.repository.delete(exerciseId);
  }
}
