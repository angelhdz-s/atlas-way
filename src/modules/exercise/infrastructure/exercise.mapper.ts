import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { MuscleMapper } from '@/modules/muscle/infrastructure/muscle.mapper';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type {
  ExercisePrisma,
  ExercisePrismaCreate,
  ExercisePrismaUpdate,
} from '@/modules/exercise/infrastructure/prisma/exercise.prisma.types';

export class ExerciseMapper {
  static toDomain(data: ExercisePrisma): Exercise {
    const { exercisesToMuscles } = data;

    const props: ExerciseProps = {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      reps: data.reps,
      sets: data.sets,
      weight: data.weight,
      userId: data.userId,
      muscles: exercisesToMuscles.map((etm) => MuscleMapper.toDomain(etm.muscle)),
    };

    return new Exercise(props);
  }
  static toPersistenceCreate(data: Exercise): ExercisePrismaCreate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      reps: data.reps,
      sets: data.sets,
      weight: data.weight,
      user: {
        connect: {
          id: data.userId,
        },
      },
      exercisesToMuscles: {
        create: data.muscles.map((m) => ({
          muscleId: m.id,
          createdAt: new Date(),
        })),
      },
    };
  }

  static toPersistenceUpdate(data: Exercise): ExercisePrismaUpdate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      reps: data.reps,
      sets: data.sets,
      weight: data.weight,

      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      exercisesToMuscles: {
        deleteMany: {},
        createMany: {
          data: data.muscles.map((m) => ({
            muscleId: m.id,
            createdAt: new Date(),
          })),
        },
      },
    };
  }

  static toDTO(data: Exercise): ExerciseDTO {
    return {
      id: data.id,
      name: data.name,
      reps: data.reps,
      sets: data.sets,
      weight: data.weight,
      description: data.description,
      createdAt: data.createdAt,
      muscles: data.muscles.map((m) => MuscleMapper.toDTO(m)),
    };
  }
}
