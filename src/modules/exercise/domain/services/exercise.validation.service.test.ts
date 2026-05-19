import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { ExerciseValidationService } from '@/modules/exercise/domain/services/exercise.validation.service';

function createExercise(id: string): Exercise {
  const exerciseResult = Exercise.create(id, {
    name: 'Exercise',
    sets: 4,
    reps: 8,
    weight: 40.5,
    description: null,
    muscles: [],
    userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
  });

  if (!exerciseResult.success) throw exerciseResult.error;
  return exerciseResult.data;
}

describe('ExerciseValidationService', () => {
  describe('Happy Path', () => {
    it('should return exercises list successfully', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      const exerciseResult = await service.validateAndFetch([
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
      ]);

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data).toHaveLength(1);
      expect(exerciseResult.success && exerciseResult.data?.[0] instanceof Exercise).toBe(true);
    });

    it('should return null successfully when provided undefined input', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exerciseResult = await service.validateAndFetch(undefined);

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data).toBe(null);
    });

    it('should return ampty array successfully when empty array input', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exerciseResult = await service.validateAndFetch([]);

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data).toHaveLength(0);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when input not array nor nullish', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      const exerciseResult = await service.validateAndFetch({} as never);

      expect(exerciseResult.success).toBe(false);
    });

    it('should return failure when input not string array ', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      const exerciseResult = await service.validateAndFetch([1, 2] as never);

      expect(exerciseResult.success).toBe(false);
    });

    it('should return failure when exercise not found ', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      const exerciseResult = await service.validateAndFetch([
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
      ]);

      expect(exerciseResult.success).toBe(false);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when exercise findById operation fails', async () => {
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const service = new ExerciseValidationService(exerciseRepoMock);

      jest
        .spyOn(exerciseRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const exercise = createExercise('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
      exerciseRepoMock.exercises.push(exercise);

      const exercisesResult = await service.validateAndFetch([
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
      ]);

      expect(exercisesResult.success).toBe(false);
      expect(!exercisesResult.success && exercisesResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
