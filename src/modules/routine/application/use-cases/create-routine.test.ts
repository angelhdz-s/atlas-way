import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { CreateRoutine } from '@/modules/routine/application/use-cases/create-routine';
import { InMemoryRoutineRepository } from '@/modules/routine/mocks/routine.mocks.repository';
import { InMemorySessionRepository } from '@/modules/session/mocks/session.mocks.repository';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import type { CreateRoutineInput } from '@/modules/routine/application/dtos/create-routine.dto';

describe('CreateRoutine use case', () => {
  describe('Happy Path', () => {
    it('should create routine successfully with sessions', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineData: CreateRoutineInput = {
        name: 'Push Pull Legs',
        description: '3 day split',
        active: true,
        days: 3,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [
          { name: 'Day 1', day: 1, sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4' },
          { name: 'Day 2', day: 2, sessionId: '2df38173-6fae-4abb-8cb2-ce33b6c24da4' },
          { name: 'Day 3', day: 3, sessionId: null },
        ],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(true);
      expect(createResult.success && createResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(createResult.success && createResult.data.name).toBe('Push Pull Legs');
      expect(routineRepoMock.routines).toHaveLength(1);
    });

    it('should create routine successfully with null sessions', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineData: CreateRoutineInput = {
        name: 'Full Body',
        description: null,
        active: false,
        days: 2,
        initialDate: new Date(),
        cycleId: 'custom',
        userId: 'user-123',
        routineDays: [
          { name: 'Day 1', day: 1, sessionId: null },
          { name: 'Day 2', day: 2, sessionId: null },
        ],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da5';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(true);
      expect(createResult.success && createResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da5'
      );
      expect(createResult.success && createResult.data.days).toBe(2);
      expect(routineRepoMock.routines).toHaveLength(1);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when session not found', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineData: CreateRoutineInput = {
        name: 'Invalid Routine',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [{ name: 'Day 1', day: 1, sessionId: 'non-existent-session' }],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da6';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('SESSION_NOT_FOUND');
      expect(routineRepoMock.routines).toHaveLength(0);
    });

    it('should return failure when invalid routine data', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      const routineData: CreateRoutineInput = {
        name: 'AB',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [{ name: 'Day 1', day: 1, sessionId: null }],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da7';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(false);
      expect(
        !createResult.success && createResult.error.code.startsWith('INVALID_ROUTINE_DATA')
      ).toBe(true);
      expect(routineRepoMock.routines).toHaveLength(0);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository create operation fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      jest
        .spyOn(routineRepoMock, 'create')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const routineData: CreateRoutineInput = {
        name: 'Test Routine',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [{ name: 'Day 1', day: 1, sessionId: null }],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da8';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(routineRepoMock.routines).toHaveLength(0);
    });

    it('should return failure when idGenerator generate operation fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      jest
        .spyOn(idGeneratorMock, 'generate')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const routineData: CreateRoutineInput = {
        name: 'Test Routine',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [{ name: 'Day 1', day: 1, sessionId: null }],
      };

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(routineRepoMock.routines).toHaveLength(0);
    });

    it('should return failure when session repository findById fails', async () => {
      const routineRepoMock = new InMemoryRoutineRepository();
      const sessionRepoMock = new InMemorySessionRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateRoutine(routineRepoMock, sessionRepoMock, idGeneratorMock);

      jest
        .spyOn(sessionRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const routineData: CreateRoutineInput = {
        name: 'Test Routine',
        description: null,
        active: true,
        days: 1,
        initialDate: new Date(),
        cycleId: 'week',
        userId: 'user-123',
        routineDays: [{ name: 'Day 1', day: 1, sessionId: 'session-1' }],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24d10';

      const createResult = await useCase.execute(routineData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(routineRepoMock.routines).toHaveLength(0);
    });
  });
});
