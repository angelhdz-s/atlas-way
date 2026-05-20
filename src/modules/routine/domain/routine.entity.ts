import { Failure, Success } from '@/shared/domain/result';
import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { CYCLE_TYPES } from '@/modules/routine/domain/constants/routine.constants.cycle-types';
import {
  routineValidators,
  validateRoutine,
} from '@/modules/routine/domain/validation/routine.validation';
import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { RoutineFactoryData, RoutineProps } from '@/modules/routine/domain/routine.types';

export class Routine {
  constructor(private data: RoutineProps) {}

  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }
  get days() {
    return this.data.days;
  }
  get active() {
    return this.data.active;
  }
  get cycle() {
    return this.data.cycle;
  }
  get initialDate() {
    return this.data.initialDate;
  }
  get createdAt() {
    return this.data.createdAt;
  }
  get updatedAt() {
    return this.data.updatedAt;
  }
  get userId() {
    return this.data.userId;
  }
  get plan() {
    return this.data.plan;
  }
  changeName(name: RoutineProps['name']): Result<null, DomainError> {
    if (!routineValidators.name.validate(name)) return Failure(routineValidators.name.error);
    this.data.name = name;
    return Success(null);
  }
  changeDescription(description: RoutineProps['description']): Result<null, DomainError> {
    if (!routineValidators.description.validate(description))
      return Failure(routineValidators.description.error);
    this.data.description = description;
    return Success(null);
  }
  changeActive(active: RoutineProps['active']): Result<null, DomainError> {
    if (!routineValidators.active.validate(active)) return Failure(routineValidators.active.error);
    this.data.active = active;
    return Success(null);
  }
  changeDays(days: RoutineProps['days']): Result<null, DomainError> {
    if (!routineValidators.days.validate(days)) return Failure(routineValidators.days.error);
    this.data.days = days;
    return Success(null);
  }
  changeInitialDate(initialDate: RoutineProps['initialDate']): Result<null, DomainError> {
    if (!routineValidators.initialDate.validate(initialDate))
      return Failure(routineValidators.initialDate.error);
    this.data.initialDate = initialDate;
    return Success(null);
  }
  changeCycle(cycleId: RoutineProps['cycle']['id']): Result<null, DomainError> {
    const cycle = Object.values(CYCLE_TYPES).find((c) => c.id === cycleId);
    if (!cycle) return Failure(new InvalidRoutineData('CYCLE'));
    this.data.cycle = cycle;
    return Success(null);
  }
  changePlan(routineDays: RoutineProps['plan']): Result<null, DomainError> {
    if (this.days !== routineDays.length) {
      const daysResult = this.changeDays(routineDays.length);
      if (!daysResult.success) return daysResult;
    }
    this.data.plan = routineDays;
    return Success(null);
  }
  static create(id: RoutineProps['id'], data: RoutineFactoryData): Result<Routine, DomainError> {
    const routineValidationResult = validateRoutine({
      ...data,
      id,
    });

    if (!routineValidationResult.success) return routineValidationResult;
    const routine = routineValidationResult.data;
    return Success(routine);
  }
}
