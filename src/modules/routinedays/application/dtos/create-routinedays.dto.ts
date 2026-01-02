import { CreateDto } from '@/shared/application/dtos/create.types';
import { RoutineDaysProps } from '../../domain/routinedays.types';

export type CreateRoutineDaysInput = CreateDto<RoutineDaysProps>;
