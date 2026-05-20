import '@testing-library/jest-dom';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { validateRoutine } from '@/modules/routine/domain/validation/routine.validation';
import { Routine } from '@/modules/routine/domain/routine.entity';

describe('validateRoutine', () => {
  describe('Happy path', () => {
    it('should validate and return routine successfully', () => {
      const idGeneratorMock = new MockIdGenerator();
      const id = idGeneratorMock.id;

      const validation = validateRoutine({
        id,
        name: 'Routine',
        description: null,
        active: true,
        cycleId: 'week',
        days: 1,
        initialDate: new Date(),
        plan: [
          {
            id,
            day: 1,
            name: 'Day 1',
            session: null,
          },
        ],
        userId: id,
      });

      expect(validation.success).toBe(true);
      expect(validation.success && validation.data instanceof Routine).toBe(true);
    });
  });

  describe('Exceptions', () => {
    const idGeneratorMock = new MockIdGenerator();
    const validId = idGeneratorMock.id;

    const validRoutineData = {
      id: validId,
      name: 'Routine',
      description: null,
      active: true,
      cycleId: 'week',
      days: 1,
      initialDate: new Date(),
      plan: [
        {
          id: validId,
          day: 1,
          name: 'Day 1',
          session: null,
        },
      ],
      userId: validId,
    };

    describe('Input', () => {
      it('should fail when invalid input', () => {
        const validation = validateRoutine(null as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_ROUTINE_DATA');
      });

      it('should fail when any required key is missing', () => {
        const { id: _, ...rest } = validRoutineData;
        const validation = validateRoutine(rest as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_ROUTINE_DATA');
      });
    });

    describe('ID field', () => {
      it('should fail when is not a valid UUID', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          id: 'invalid-uuid',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_ROUTINE_DATA');
      });

      it('should fail when is not a string', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          id: 123,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('INVALID_ROUTINE_DATA');
      });
    });

    describe('NAME field', () => {
      it('should fail is too short (less than 4 chars)', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          name: 'abc',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.NAME'
        );
      });

      it('should fail when is too long (more than 30 chars)', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          name: 'a'.repeat(31),
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.NAME'
        );
      });

      it('should fail when is not a string', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          name: 123,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.NAME'
        );
      });
    });

    describe('DESCRIPTION field', () => {
      it('should fail when is not a string or null', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          description: 123,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DESCRIPTION'
        );
      });

      it('should fail when is too long (more than 100 chars)', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          description: 'a'.repeat(101),
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DESCRIPTION'
        );
      });
    });

    describe('ACTIVE field', () => {
      it('should fail when is not a boolean', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          active: 'true',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.ACTIVE'
        );
      });
    });

    describe('DAYS field', () => {
      it('should fail when is not an integer', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          days: 1.5,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DAYS'
        );
      });

      it('should fail when is out of range (less than 1)', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          days: 0,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DAYS'
        );
      });

      it('should fail when is out of range (greater than 14)', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          days: 15,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DAYS'
        );
      });

      it('should fail when is not a number', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          days: '1',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.DAYS'
        );
      });

      it('should fail when is not equal to routineDays length', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          days: 2,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.PLAN_LENGTH'
        );
      });
    });

    describe('INITIAL DATE field', () => {
      it('should fail when is not a Date', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          initialDate: '2024-01-01',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.INITIAL_DATE'
        );
      });
    });

    describe('CYCLE ID field', () => {
      it('should fail when is not a valid cycle type', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          cycleId: 'invalid-cycle',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.CYCLE'
        );
      });

      it('should fail when is not a string', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          cycleId: null,
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe(
          'INVALID_ROUTINE_DATA.CYCLE'
        );
      });
    });

    describe('Extra non-existing keys', () => {
      it('should pass when extra key exists in input', () => {
        const validation = validateRoutine({
          ...validRoutineData,
          extraKey: 'value',
        } as unknown as Parameters<typeof validateRoutine>[0]);
        expect(validation.success).toBe(true);
      });
    });
  });
});
