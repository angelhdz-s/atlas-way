import { MuscleProps } from '@/modules/muscle/domain/muscle.types';

export type MuscleDTO = Pick<MuscleProps, 'id' | 'name' | 'description'>;
