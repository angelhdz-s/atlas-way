import { Failure, Success } from '@/shared/domain/result';
import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { CYCLE_TYPES } from '@/modules/routine/domain/constants/routine.constants.cycle-types';
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
  get routineDays() {
    return this.data.routineDays;
  }
  changeName(name: RoutineProps['name']): Result<null, DomainError> {
    this.data.name = name;
    return Success(null);
  }
  changeDescription(description: RoutineProps['description']): Result<null, DomainError> {
    this.data.description = description;
    return Success(null);
  }
  changeActive(active: RoutineProps['active']): Result<null, DomainError> {
    this.data.active = active;
    return Success(null);
  }
  changeDays(days: RoutineProps['days']): Result<null, DomainError> {
    this.data.days = days;
    return Success(null);
  }
  changeInitialDate(initialDate: RoutineProps['initialDate']): Result<null, DomainError> {
    this.data.initialDate = initialDate;
    return Success(null);
  }
  changeCycle(cycleId: RoutineProps['cycle']['id']): Result<null, DomainError> {
    const cycle = Object.values(CYCLE_TYPES).find((c) => c.id === cycleId);
    if (!cycle) return Failure(new InvalidRoutineData('CYCLE'));
    this.data.cycle = cycle;
    return Success(null);
  }
  changeRoutineDays(routineDays: RoutineProps['routineDays']): Result<null, DomainError> {
    if (!routineDays || routineDays.length !== this.data.days) {
      return Failure(new InvalidRoutineData('ROUTINE_DAYS_LENGTH'));
    }
    this.data.routineDays = routineDays;
    return Success(null);
  }
  static create(id: RoutineProps['id'], data: RoutineFactoryData): Result<Routine, DomainError> {
    if (!data.routineDays || data.routineDays.length !== data.days) {
      return Failure(new InvalidRoutineData('ROUTINE_DAYS_LENGTH'));
    }

    const cycle = Object.values(CYCLE_TYPES).find((c) => c.id === data.cycleId);
    if (!cycle) return Failure(new InvalidRoutineData('CYCLE'));

    return Success(
      new Routine({
        ...data,
        id,
        cycle,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );
  }
}
