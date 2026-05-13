import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { CreateExercise } from '@/modules/exercise/application/use-cases/create-exercise';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { InMemoryMuscleRepository } from '@/modules/exercise/mocks/muscle.mocks.repository';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import type { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';

describe('CreateExercise use case', () => {
  describe('Happy Path', () => {
    it('should create exercise successfully and persist it', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);

      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscleIds: [1],
        userId: 'user-123',
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(true);
      expect(createExerciseResult.success && createExerciseResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(createExerciseResult.success && createExerciseResult.data.name).toBe('Bench Press');

      expect(exerciseRepoMock.exercises).toHaveLength(1);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when muscle not found', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);
      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscleIds: [1, 2, 3],
        userId: 'user-123',
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(false);
      expect(!createExerciseResult.success && createExerciseResult.error.code).toBe(
        'MUSCLE_NOT_FOUND'
      );

      expect(exerciseRepoMock.exercises).toHaveLength(0);
    });

    it('should return failure when invalid exercise data', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);

      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: -1,
        reps: 10,
        weight: 80,
        muscleIds: [1, 2],
        userId: 'user-123',
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(false);
      expect(
        !createExerciseResult.success &&
          createExerciseResult.error.code.startsWith('INVALID_EXERCISE_DATA')
      ).toBe(true);

      expect(exerciseRepoMock.exercises).toHaveLength(0);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository create operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);

      jest
        .spyOn(exerciseRepoMock, 'create')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscleIds: [1],
        userId: 'user-123',
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(false);
      expect(!createExerciseResult.success && createExerciseResult.error.code).toBe(
        'TECHNICAL_ERROR'
      );

      expect(exerciseRepoMock.exercises).toHaveLength(0);
    });

    it('should return failure when idGenerator generate operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);

      jest
        .spyOn(idGeneratorMock, 'generate')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscleIds: [1],
        userId: 'user-123',
      };

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(false);
      expect(!createExerciseResult.success && createExerciseResult.error.code).toBe(
        'TECHNICAL_ERROR'
      );

      expect(exerciseRepoMock.exercises).toHaveLength(0);
    });

    it('should return failure when muscle repository findByIds operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateExercise(exerciseRepoMock, muscleRepoMock, idGeneratorMock);

      jest
        .spyOn(muscleRepoMock, 'findByIds')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const exerciseData: CreateExerciseInput = {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscleIds: [1],
        userId: 'user-123',
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createExerciseResult = await useCase.execute(exerciseData);

      expect(createExerciseResult.success).toBe(false);
      expect(!createExerciseResult.success && createExerciseResult.error.code).toBe(
        'TECHNICAL_ERROR'
      );

      expect(exerciseRepoMock.exercises).toHaveLength(0);
    });
  });
});
