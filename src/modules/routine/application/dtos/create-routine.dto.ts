import { CreateDto } from '@/shared/application/dtos/create.types';
import { RoutineProps } from '../../domain/routine.types';

export type CreateRoutineInput = CreateDto<RoutineProps>;
