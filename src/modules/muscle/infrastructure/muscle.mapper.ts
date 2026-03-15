import { Muscle } from '../domain/muscle.entity';
import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import type { MusclePrisma } from './prisma/muscle.prisma.types';
import type { MuscleProps } from '../domain/muscle.types';

export class MuscleMapper {
  static toDomain(data: MusclePrisma): Muscle {
    const { muscularGroup } = data;
    const { bodySection } = muscularGroup;
    const muscle: MuscleProps = {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
      group: {
        id: muscularGroup.id,
        name: muscularGroup.name,
        createdAt: muscularGroup.createdAt,
        updatedAt: muscularGroup.updatedAt,
        section: {
          id: bodySection.id,
          name: bodySection.name,
          createdAt: bodySection.createdAt,
          updatedAt: bodySection.updatedAt,
        },
      },
    };
    return new Muscle(muscle);
  }

  static toDTO(data: Muscle): MuscleDTO {
    const { bodySection } = data;
    const { muscularGroup } = data;
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      group: {
        name: muscularGroup.name,
        section: {
          name: bodySection.name,
        },
      },
    };
  }
}
