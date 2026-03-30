import type { UseCase } from '@/shared/application/use-case';
import type { RoutineProps } from '../../domain/routine.types';
import type { IRoutineRepository } from '../../domain/routine.repository';
import type { UserProps } from '@/modules/user/domain/user.types';
import { Failure } from '@/shared/domain/result';
import { RoutineNotFoundError, RoutineOwnershipError } from '../../domain/errors/routine.errors';

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
