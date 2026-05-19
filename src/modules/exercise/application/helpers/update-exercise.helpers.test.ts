import '@testing-library/jest-dom';
import type { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { updateExercise } from '@/modules/exercise/application/helpers/update-exercise.helper';

const createExercise = () => {
  const exercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
    name: 'Exercise',
    description: null,
    muscles: [],
    sets: 4,
    reps: 16,
    weight: 60.5,
    userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
  });

  if (!exercise.success) throw exercise.error;

  return exercise.data;
};

describe('UpdateExercise updateExercise helper', () => {
  describe('Happy Path', () => {
    it('should update exercise successfully and persist changes', () => {
      const exercise = createExercise();
      const newData: UpdateExerciseInput = {
        description: 'New description',
      };
      const updateResult = updateExercise(newData, exercise);
      expect(updateResult.success).toBe(true);
      expect(exercise.description).toBe('New description');
    });
  });

  describe('Error Handling', () => {
    it('should return failure when invalid data', () => {
      const exercise = createExercise();
      const newData: UpdateExerciseInput = null as never;
      const updateResult = updateExercise(newData, exercise);
      expect(updateResult.success).toBe(false);
      expect(
        !updateResult.success && updateResult.error.code.startsWith('INVALID_EXERCISE_DATA')
      ).toBe(true);
    });

    it('should skip property update when not-existing keys', () => {
      const exercise = createExercise();
      const newData: UpdateExerciseInput = {
        restTime: 180,
      } as never;
      const updateResult = updateExercise(newData, exercise);
      expect(updateResult.success).toBe(true);
      expect('restTime' in exercise).toBe(false);
    });

    it('should return failure when invalid property data', () => {
      const exercise = createExercise();
      const newData: UpdateExerciseInput = {
        sets: -1,
      };
      const updateResult = updateExercise(newData, exercise);
      expect(updateResult.success).toBe(false);
      expect(
        !updateResult.success && updateResult.error.code.startsWith('INVALID_EXERCISE_DATA')
      ).toBe(true);
    });
  });
});
