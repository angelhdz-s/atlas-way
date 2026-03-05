import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { RoutineProps } from '../../domain/routine.types';

export type CreateRoutineInput = CreateDto<RoutineProps>;
