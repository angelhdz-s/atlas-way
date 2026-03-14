import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { RoutineDaysProps } from '../../domain/routine-days.types';

export type CreateRoutineDaysInput = CreateDto<RoutineDaysProps>;

export type CreateRoutineDaysWithoutRoutineIdInput = Omit<CreateRoutineDaysInput, 'routineId'>;
