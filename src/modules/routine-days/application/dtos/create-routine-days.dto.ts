import { CreateDto } from '@/shared/application/dtos/create.types';
import { RoutineDaysProps } from '../../domain/routine-days.types';

export type CreateRoutineDaysInput = CreateDto<RoutineDaysProps>;
