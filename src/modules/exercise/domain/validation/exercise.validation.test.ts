import '@testing-library/jest-dom';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { validateExercise } from '@/modules/exercise/domain/validation/exercise.validation';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';

describe('validateExercise', () => {
  describe('Happy path', () => {
    it('should validate and return exercise successfully', () => {
      const idGeneratorMock = new MockIdGenerator();
      const id = idGeneratorMock.id;

      const validation = validateExercise({
        id,
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 80,
        muscles: [],
        userId: id,
      });

      expect(validation.success).toBe(true);
      expect(validation.success && validation.data instanceof Exercise).toBe(true);
    });

    it('should validate with null description', () => {
      const idGeneratorMock = new MockIdGenerator();
      const id = idGeneratorMock.id;

      const validation = validateExercise({
        id,
        name: 'Squat',
        description: null,
        sets: 4,
        reps: 8,
        weight: 100,
        muscles: [],
        userId: id,
      });

      expect(validation.success).toBe(true);
      expect(validation.success && validation.data instanceof Exercise).toBe(true);
    });
  });

  describe('Exceptions', () => {
    const idGeneratorMock = new MockIdGenerator();
    const validId = idGeneratorMock.id;

    const validExerciseData = {
      id: validId,
      name: 'Bench Press',
      description: 'Chest exercise',
      sets: 3,
      reps: 10,
      weight: 80,
      muscles: [],
      userId: validId,
    };

    describe('Input', () => {
      it('should fail when invalid input provided', () => {
        const validation = validateExercise(null as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_EXERCISE_DATA');
      });

      it('should fail when any required key is missing', () => {
        const { id: _, ...rest } = validExerciseData;
        const validation = validateExercise(rest as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_EXERCISE_DATA');
      });
    });

    describe('ID field', () => {
      it('should fail when is not a valid UUID', () => {
        const validation = validateExercise({
          ...validExerciseData,
          id: 'invalid-uuid',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_EXERCISE_DATA');
      });

      it('should fail when is not a string', () => {
        const validation = validateExercise({
          ...validExerciseData,
          id: 123,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_EXERCISE_DATA');
      });
    });

    describe('NAME field', () => {
      it('should fail is too short (less than 3 chars)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          name: 'ab',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.NAME'
        );
      });

      it('should fail when is too long (more than 30 chars)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          name: 'a'.repeat(31),
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.NAME'
        );
      });

      it('should fail when is not a string', () => {
        const validation = validateExercise({
          ...validExerciseData,
          name: 123,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.NAME'
        );
      });
    });

    describe('DESCRIPTION field', () => {
      it('should fail when is not a string or null', () => {
        const validation = validateExercise({
          ...validExerciseData,
          description: 123,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.DESCRIPTION'
        );
      });

      it('should fail when is too short (less than 1 chars)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          description: '',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.DESCRIPTION'
        );
      });

      it('should fail when is too long (more than 100 chars)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          description: 'a'.repeat(101),
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.DESCRIPTION'
        );
      });
    });

    describe('SETS field', () => {
      it('should fail when is not an integer', () => {
        const validation = validateExercise({
          ...validExerciseData,
          sets: 3.5,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.SETS'
        );
      });

      it('should fail when is out of range (less than 1)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          sets: 0,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.SETS'
        );
      });

      it('should fail when is not a number', () => {
        const validation = validateExercise({
          ...validExerciseData,
          sets: '3',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.SETS'
        );
      });
    });

    describe('REPS field', () => {
      it('should fail when is not an integer', () => {
        const validation = validateExercise({
          ...validExerciseData,
          reps: 10.5,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.REPS'
        );
      });

      it('should fail when is out of range (less than 1)', () => {
        const validation = validateExercise({
          ...validExerciseData,
          reps: 0,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.REPS'
        );
      });

      it('should fail when is not a number', () => {
        const validation = validateExercise({
          ...validExerciseData,
          reps: '10',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.REPS'
        );
      });
    });

    describe('WEIGHT field', () => {
      it('should fail when is not a number', () => {
        const validation = validateExercise({
          ...validExerciseData,
          weight: '80',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.WEIGHT'
        );
      });

      it('should fail when is negative', () => {
        const validation = validateExercise({
          ...validExerciseData,
          weight: -10,
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_EXERCISE_DATA.WEIGHT'
        );
      });
    });

    describe('Extra non-existing keys', () => {
      it('should pass when extra key exists in input', () => {
        const validation = validateExercise({
          ...validExerciseData,
          extraKey: 'value',
        } as unknown as Parameters<typeof validateExercise>[0]);
        expect(validation.success).toBe(true);
      });
    });
  });
});
