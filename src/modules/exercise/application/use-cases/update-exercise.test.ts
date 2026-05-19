import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { InMemoryMuscleRepository } from '@/modules/muscle/mocks/muscle.mocks.repository';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';

function createExercise(id: string): Exercise {
  const exercise = Exercise.create(id, {
    name: 'Bench Press',
    description: 'Chest exercise',
    sets: 3,
    reps: 10,
    weight: 80,
    muscles: [],
    userId: 'user-123',
  });

  if (!exercise.success) throw new Error('Failed to create exercise');
  return exercise.data;
}

describe('UpdateExercise use case', () => {
  describe('Happy Path', () => {
    it('should update exercise successfully and persist changes', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      expect(exerciseRepoMock.exercises[0]?.name).not.toBe('Updated Bench Press');

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Bench Press',
        muscleIds: [1],
      });

      expect(updateResult.success).toBe(true);
      expect(updateResult.success && updateResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(updateResult.success && updateResult.data.name).toBe('Updated Bench Press');

      expect(exerciseRepoMock.exercises[0]?.name).toBe('Updated Bench Press');
      expect(exerciseRepoMock.exercises[0]?.muscles).toHaveLength(1);
    });

    it('should update multiple fields', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

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

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

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

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

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

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

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

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      jest
        .spyOn(exerciseRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Updated Name',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when muscle repository findById operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const muscleRepoMock = new InMemoryMuscleRepository();
      const useCase = new UpdateExercise(exerciseRepoMock, muscleRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      jest
        .spyOn(muscleRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        muscleIds: [666],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
