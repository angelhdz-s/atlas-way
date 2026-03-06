import type { UpdateDto } from '@/shared/application/dtos/create.types';
import type { RoutineDaysProps } from '../../domain/routine-days.types';

type UpdateProps = Pick<RoutineDaysProps, 'name' | 'dayNumber'>;
export type UpdateRoutineDaysInput = UpdateDto<UpdateProps>;
