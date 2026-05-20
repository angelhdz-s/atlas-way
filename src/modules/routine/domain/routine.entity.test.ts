import '@testing-library/jest-dom';
import { Routine } from './routine.entity';

function createTestRoutine(): Routine {
  const result = Routine.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
    name: 'Test Routine',
    description: 'Test description',
    active: true,
    days: 3,
    initialDate: new Date(),
    cycleId: 'week',
    plan: [
      { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da1', name: 'Day 1', day: 1, session: null },
      { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da2', name: 'Day 2', day: 2, session: null },
      { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da3', name: 'Day 3', day: 3, session: null },
    ],
    userId: 'user-123',
  });
  if (!result.success) throw new Error('Failed to create routine');
  return result.data;
}

describe('Routine entity', () => {
  describe('create()', () => {
    it('should create routine instance successfully', async () => {
      const routineResult = Routine.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        name: 'My Routine',
        description: 'Test description',
        active: true,
        days: 3,
        initialDate: new Date(),
        cycleId: 'week',
        plan: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da1', name: 'Day 1', day: 1, session: null },
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da2', name: 'Day 2', day: 2, session: null },
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da3', name: 'Day 3', day: 3, session: null },
        ],
        userId: 'user-123',
      });

      expect(routineResult.success).toBe(true);
      expect(routineResult.success && routineResult.data instanceof Routine).toBe(true);
    });

    it('should return failure when routine data is invalid', async () => {
      const routineResult = Routine.create('invalid-id', {
        name: 'My Routine',
        description: 'Test description',
        active: true,
        days: 3,
        initialDate: new Date(),
        cycleId: 'week',
        plan: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da1', name: 'Day 1', day: 1, session: null },
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da2', name: 'Day 2', day: 2, session: null },
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da3', name: 'Day 3', day: 3, session: null },
        ],
        userId: 'user-123',
      });

      expect(routineResult.success).toBe(false);
      expect(!routineResult.success && routineResult.error.code).toBe('INVALID_ROUTINE_DATA');
    });
  });

  describe('changeName()', () => {
    it('should change routine name successfully', async () => {
      const routine = createTestRoutine();
      const result = routine.changeName('New Name');
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.name).toBe('New Name');
    });

    it('should return failure when name is invalid', async () => {
      const routine = createTestRoutine();
      const result = routine.changeName(123 as never);
      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('INVALID_ROUTINE_DATA.NAME');
      expect(routine.name).not.toBe(123);
    });
  });

  describe('changeDescription()', () => {
    it('should change routine description successfully', async () => {
      const routine = createTestRoutine();
      const result = routine.changeDescription('New description');
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.description).toBe('New description');
    });

    it('should return failure when description is invalid', async () => {
      const routine = createTestRoutine();
      const result = routine.changeDescription(123 as never);
      expect(result.success).toBe(false);
      expect(routine.description).not.toBe(123);
    });
  });

  describe('changeActive()', () => {
    it('should change active status successfully', async () => {
      const routine = createTestRoutine();
      const result = routine.changeActive(false);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.active).toBe(false);
    });

    it('should return failure when active is not a boolean', async () => {
      const routine = createTestRoutine();
      const result = routine.changeActive('true' as never);
      expect(result.success).toBe(false);
      expect(routine.active).not.toBe('true');
    });
  });

  describe('changeDays()', () => {
    it('should change days successfully', async () => {
      const routine = createTestRoutine();
      const result = routine.changeDays(5);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.days).toBe(5);
    });

    it('should return failure when days is not a number', async () => {
      const routine = createTestRoutine();
      const result = routine.changeDays('5' as never);
      expect(result.success).toBe(false);
      expect(routine.days).not.toBe('5');
    });
  });

  describe('changeInitialDate()', () => {
    it('should change initial date successfully', async () => {
      const newDate = new Date('2025-01-01');
      const routine = createTestRoutine();
      const result = routine.changeInitialDate(newDate);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.initialDate).toBe(newDate);
    });

    it('should return failure when initialDate is not a Date', async () => {
      const routine = createTestRoutine();
      const result = routine.changeInitialDate('2024-01-01' as never);
      expect(result.success).toBe(false);
      expect(routine.initialDate).not.toBe('2024-01-01');
    });
  });

  describe('changeCycle()', () => {
    it('should change cycle successfully', async () => {
      const routine = createTestRoutine();
      const result = routine.changeCycle('custom');
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.cycle.id).toBe('custom');
    });

    it('should return failure when cycleId is invalid', async () => {
      const routine = createTestRoutine();
      const result = routine.changeCycle('invalid-cycle' as never);
      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('INVALID_ROUTINE_DATA.CYCLE');
      expect(routine.cycle.id).not.toBe('invalid-cycle');
    });
  });

  describe('changeRoutineDays()', () => {
    it('should change routine days successfully', async () => {
      const routine = createTestRoutine();
      const newRoutineDays = [
        { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da1', name: 'Day 1', day: 1, session: null },
        { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da2', name: 'Day 2', day: 2, session: null },
        { id: '1df38173-6fae-4abb-8cb2-ce33b6c24da3', name: 'Day 3', day: 3, session: null },
      ];
      const result = routine.changePlan(newRoutineDays);
      expect(result.success).toBe(true);
      expect(result.success && result.data).toBe(null);
      expect(routine.plan).toEqual(newRoutineDays);
      expect(routine.days).toBe(3);
    });
  });
});
