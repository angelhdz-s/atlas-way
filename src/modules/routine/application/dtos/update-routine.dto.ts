import { UpdateDto } from '@/shared/application/dtos/create.types';
import { RoutineProps } from '../../domain/routine.types';

type UpdateProps = Pick<RoutineProps, 'name' | 'description' | 'active' | 'days' | 'initialDate'>;
export type UpdateRoutineInput = UpdateDto<UpdateProps>;
