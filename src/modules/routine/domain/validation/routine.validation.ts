import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { Failure, Success } from '@/shared/domain/result';
import { Routine } from '@/modules/routine/domain/routine.entity';
import { isKeyOf, isObject } from '@/shared/domain/validation.utils';
import { CYCLE_TYPES } from '@/modules/routine/domain/constants/routine.constants.cycle-types';
import {
  areValidRoutineRoutineDays,
  isValidRoutineActive,
  isValidRoutineDays,
  isValidRoutineDescription,
  isValidRoutineId,
  isValidRoutineInitialDate,
  isValidRoutineName,
} from '@/modules/routine/domain/validation/routine.validation.utils';
import type { ValidationFunction } from '@/shared/shared.types';
import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { RoutineFactoryData, RoutineProps } from '@/modules/routine/domain/routine.types';

type RoutineValidationKeys = Omit<RoutineProps, 'createdAt' | 'updatedAt' | 'cycle' | 'userId'>;

type RoutineValidators = Record<
  keyof RoutineValidationKeys,
  {
    validate: ValidationFunction;
    error: DomainError;
  }
>;

const routineValidators: RoutineValidators = {
  id: { validate: isValidRoutineId, error: new InvalidRoutineData() },
  name: { validate: isValidRoutineName, error: new InvalidRoutineData('NAME') },
  description: {
    validate: isValidRoutineDescription,
    error: new InvalidRoutineData('DESCRIPTION'),
  },
  active: { validate: isValidRoutineActive, error: new InvalidRoutineData('ACTIVE') },
  days: { validate: isValidRoutineDays, error: new InvalidRoutineData('DAYS') },
  initialDate: {
    validate: isValidRoutineInitialDate,
    error: new InvalidRoutineData('INITIAL_DATE'),
  },
  routineDays: {
    validate: areValidRoutineRoutineDays,
    error: new InvalidRoutineData('ROUTINE_DAYS'),
  },
};

type RoutineMiminumProps = RoutineFactoryData & {
  id: RoutineProps['id'];
};

export function validateRoutine(routine: RoutineMiminumProps): Result<Routine, DomainError> {
  if (!isObject(routine)) return Failure(new InvalidRoutineData());
  const routineValidatorKeys = Object.keys(routineValidators) as (keyof RoutineValidationKeys)[];

  for (const key of routineValidatorKeys) {
    if (!isKeyOf(key, routineValidators)) return Failure(new InvalidRoutineData());
    if (!isKeyOf(key, routine)) return Failure(new InvalidRoutineData());
    const value = routine[key];
    const validator = routineValidators[key];
    if (!validator.validate(value)) return Failure(validator.error);
  }

  const cycle = Object.values(CYCLE_TYPES).find((c) => c.id === routine.cycleId);
  if (!cycle) return Failure(new InvalidRoutineData('CYCLE'));

  const domainRoutine = new Routine({
    id: routine.id,
    name: routine.name,
    description: routine.description,
    active: routine.active,
    initialDate: routine.initialDate,
    routineDays: routine.routineDays,
    cycle,
    days: routine.days,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: routine.userId,
  });

  return Success(domainRoutine);
}
