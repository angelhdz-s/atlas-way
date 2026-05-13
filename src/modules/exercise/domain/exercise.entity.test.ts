import '@testing-library/jest-dom';
import { Exercise } from './exercise.entity';

function createTestExercise(): Exercise {
  const result = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
    name: 'Bench Press',
    description: 'Chest exercise',
    sets: 3,
    reps: 10,
    weight: 80,
    muscles: [],
    userId: 'user-123',
  });
  if (!result.success) throw new Error('Failed to create exercise');
  return result.data;
}

describe('Exercise entity', () => {
  describe('create()', () => {
    it('should create exercise instance successfully', () => {
      const exerciseResult = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'Squat',
        description: 'Leg exercise',
        sets: 4,
        reps: 8,
        weight: 100,
        muscles: [],
        userId: 'user-123',
      });

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data instanceof Exercise).toBe(true);
    });

    it('should return failure when invalid data provided', () => {
      const exerciseResult = Exercise.create('invalid-id', {
        name: 'Squat',
        description: 'Leg exercise',
        sets: -1,
        reps: 8,
        weight: 100,
        muscles: [],
        userId: 'user-123',
      });

      expect(exerciseResult.success).toBe(false);
    });
  });

  describe('changeName()', () => {
    it('should change exercise name successfully', () => {
      const exercise = createTestExercise();
      const result = exercise.changeName('New Bench Press');
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.name).toBe('New Bench Press');
    });

    it('should return failure when name is invalid', () => {
      const exercise = createTestExercise();
      const result = exercise.changeName(123 as never);
      expect(result.success).toBe(false);
      expect(exercise.name).not.toBe(123);
    });
  });

  describe('changeDescription()', () => {
    it('should change exercise description successfully', () => {
      const exercise = createTestExercise();
      const result = exercise.changeDescription('New description');
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.description).toBe('New description');
    });

    it('should return failure when description is invalid', () => {
      const exercise = createTestExercise();
      const result = exercise.changeDescription(123 as never);
      expect(result.success).toBe(false);
      expect(exercise.description).not.toBe(123);
    });
  });

  describe('changeSets()', () => {
    it('should change exercise sets successfully', () => {
      const exercise = createTestExercise();
      const result = exercise.changeSets(5);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.sets).toBe(5);
    });

    it('should return failure when sets is invalid', () => {
      const exercise = createTestExercise();
      const result = exercise.changeSets('5' as never);
      expect(result.success).toBe(false);
      expect(exercise.sets).not.toBe('5');
    });
  });

  describe('changeReps()', () => {
    it('should change exercise reps successfully', () => {
      const exercise = createTestExercise();
      const result = exercise.changeReps(12);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.reps).toBe(12);
    });

    it('should return failure when reps is invalid', () => {
      const exercise = createTestExercise();
      const result = exercise.changeReps('10' as never);
      expect(result.success).toBe(false);
      expect(exercise.reps).not.toBe('10');
    });
  });

  describe('changeWeight()', () => {
    it('should change exercise weight successfully', () => {
      const exercise = createTestExercise();
      const result = exercise.changeWeight(90);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.weight).toBe(90);
    });

    it('should return failure when weight is invalid', () => {
      const exercise = createTestExercise();
      const result = exercise.changeWeight('80' as never);
      expect(result.success).toBe(false);
      expect(exercise.weight).not.toBe('80');
    });
  });

  describe('changeMuscles()', () => {
    it('should change exercise muscles successfully', () => {
      const exercise = createTestExercise();
      const newMuscles = [{ id: 'muscle-1', name: 'Chest' }] as never;
      const result = exercise.changeMuscles(
        newMuscles as Parameters<typeof exercise.changeMuscles>[0]
      );
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(exercise.muscles).toEqual(newMuscles);
    });
  });
});
