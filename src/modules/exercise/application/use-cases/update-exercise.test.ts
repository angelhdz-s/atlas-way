import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { InMemoryMuscleRepository } from '@/modules/exercise/mocks/muscle.mocks.repository';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';

describe('UpdateExercise use case', () => {
  describe('Happy Path', () => {
    it('should update exercise successfully and persist changes', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });
      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      expect(exerciseRepoMock.exercises[0]?.name).not.toBe('Updated Bench Press');

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Bench Press',
      });

      expect(updateResult.success).toBe(true);
      expect(updateResult.success && updateResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(updateResult.success && updateResult.data.name).toBe('Updated Bench Press');

      expect(exerciseRepoMock.exercises[0]?.name).toBe('Updated Bench Press');
    });

    it('should update multiple fields', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });
      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Name',
        sets: 5,
        reps: 8,
      });

      expect(updateResult.success).toBe(true);
      expect(updateResult.success && updateResult.data.name).toBe('Updated Name');
      expect(updateResult.success && updateResult.data.sets).toBe(5);
      expect(updateResult.success && updateResult.data.reps).toBe(8);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when exercise not found', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const updateResult = await useCase.execute('non-existent-id', {
        name: 'Updated Name',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('EXERCISE_NOT_FOUND');
    });

    it('should return failure when invalid data provided', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });
      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      const updateResult = await useCase.execute(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        null as never
      );

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('INVALID_EXERCISE_DATA');
    });

    it('should return failure when muscles not found', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });
      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        muscleIds: [999],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('MUSCLE_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository update operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });
      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      jest
        .spyOn(exerciseRepoMock, 'update')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Name',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');

      expect(exerciseRepoMock.exercises[0]?.name).not.toBe('Updated Name');
    });

    it('should return failure when repository findById operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      jest
        .spyOn(exerciseRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Name',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when muscle repository findByIds operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: 'user-123',
      });

      if (!exercise.success) throw new Error('Failed to create exercise');
      await exerciseRepoMock.create(exercise.data);

      jest
        .spyOn(muscleRepoMock, 'findByIds')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        muscleIds: [666],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
