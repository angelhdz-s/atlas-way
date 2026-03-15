import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';

type MuscularGroupDTO = Omit<MuscleProps['group'], 'id' | 'createdAt' | 'updatedAt' | 'section'>;

type BodySectionDTO = Omit<MuscleProps['group']['section'], 'id' | 'createdAt' | 'updatedAt'>;

export type MuscleDTO = Omit<MuscleProps, 'createdAt' | 'updatedAt' | 'userId' | 'group'> & {
  group: MuscularGroupDTO & {
    section: BodySectionDTO;
  };
};
