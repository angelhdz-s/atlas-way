import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { UpdateRoutine } from '@/modules/routine/application/use-cases/update-routine';
import { InMemoryRoutineRepository } from '@/modules/routine/mocks/routine.mocks.repository';
import { InMemorySessionRepository } from '@/modules/session/mocks/session.mocks.repository';
import { Routine } from '@/modules/routine/domain/routine.entity';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';

describe('UpdateRoutine use case', () => {
  describe('Happy Path', () => {
    it('should update routine successfully', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da1';
      const routine = Routine.create(routineId, {
        name: 'Original Name',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d01', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      expect(routineRepoMock.routines[0]?.name).not.toBe('Updated Routine');

      const updateResult = await useCase.execute(routineId, { name: 'Updated Routine' });

      expect(updateResult.success).toBe(true);
      expect(updateResult.success && updateResult.data.id).toBe(routineId);
      expect(updateResult.success && updateResult.data.name).toBe('Updated Routine');
      expect(routineRepoMock.routines[0]?.name).toBe('Updated Routine');
    });

    it('should update multiple fields including routineDays', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da2';
      const routine = Routine.create(routineId, {
        name: 'Original',
        description: null,
        active: false,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d02', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24d03';
      const updateResult = await useCase.execute(routineId, {
        name: 'Updated',
        active: true,
        days: 2,
        routineDays: [
          { name: 'Day 1', day: 1, sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4' },
          { name: 'Day 2', day: 2, sessionId: null },
        ],
      });

      expect(updateResult.success).toBe(true);
      expect(updateResult.success && updateResult.data.name).toBe('Updated');
      expect(updateResult.success && updateResult.data.active).toBe(true);
      expect(updateResult.success && updateResult.data.days).toBe(2);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when routine not found', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24d99', {
        name: 'New Name',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('ROUTINE_NOT_FOUND');
    });

    it('should return failure when session not found', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24d99', {
        name: 'New Name',
        routineDays: [
          {
            day: 1,
            name: 'Day 1',
            sessionId: 'not-existing-session',
          },
        ],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('ROUTINE_NOT_FOUND');
    });

    it('should return failure when invalid data provided', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da3';
      const routine = Routine.create(routineId, {
        name: 'Valid Name',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d04', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      const updateResult = await useCase.execute(routineId, { name: 'AB' });

      expect(updateResult.success).toBe(false);
      expect(
        !updateResult.success && updateResult.error.code.startsWith('INVALID_ROUTINE_DATA')
      ).toBe(true);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository update operation fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da5';
      const routine = Routine.create(routineId, {
        name: 'Test',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d06', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      jest
        .spyOn(routineRepoMock, 'update')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute(routineId, { name: 'Updated' });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
      expect(routineRepoMock.routines[0]?.name).not.toBe('Updated');
    });

    it('should return failure when repository findById operation fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      jest
        .spyOn(routineRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute('1df38173-6fae-4abb-8cb2-ce33b6c24da6', {
        name: 'Updated',
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when idGenerator fails during routineDays update', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da7';
      const routine = Routine.create(routineId, {
        name: 'Test',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d07', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      jest
        .spyOn(idGeneratorMock, 'generate')
        .mockReturnValue(Failure(new TechnicalError() as never));

      const updateResult = await useCase.execute(routineId, {
        routineDays: [{ name: 'Day 1', day: 1, sessionId: null }],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when session operation findById fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      jest
        .spyOn(sessionRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const routineId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const routine = Routine.create(routineId, {
        name: 'Test',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        routineDays: [
          { id: '1df38173-6fae-4abb-8cb2-ce33b6c24d05', day: 1, name: 'Day 1', session: null },
        ],
        userId: 'user-123',
      });
      if (!routine.success) throw new Error('Failed to create routine');
      await routineRepoMock.create(routine.data);

      const updateResult = await useCase.execute(routineId, {
        routineDays: [{ name: 'Day 1', day: 1, sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4' }],
      });

      expect(updateResult.success).toBe(false);
      expect(!updateResult.success && updateResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
