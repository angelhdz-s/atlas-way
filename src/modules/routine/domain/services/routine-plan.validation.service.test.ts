import '@testing-library/jest-dom';
import type { RoutinePlanDayFactory } from '@/modules/routine/domain/routine.types';
import { InMemorySessionRepository } from '@/modules/session/mocks/session.mocks.repository';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { RoutinePlanValidationService } from '@/modules/routine/domain/services/routine-plan.validation.service';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { Failure } from '@/shared/domain/result';

describe('ExerciseValidationService', () => {
  describe('Happy path', () => {
    const idGeneratorRepoMock = new MockIdGenerator();
    const sessionRepoMock = new InMemorySessionRepository();
    const service = new RoutinePlanValidationService(sessionRepoMock, idGeneratorRepoMock);
    it('should return result successfully when valid routineDays array', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [
        {
          day: 1,
          name: 'Day 1',
          sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        },
        {
          day: 2,
          name: 'Day 2',
          sessionId: null,
        },
      ];

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);

      expect(routineDaysResult.success).toBe(true);
      expect(routineDaysResult.success && routineDaysResult.data).toHaveLength(2);
    });

    it('should return result successfully when empty array', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [];

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);

      expect(routineDaysResult.success).toBe(true);
      expect(routineDaysResult.success && routineDaysResult.data).toHaveLength(0);
    });

    it('should return result successfully when undefined input', async () => {
      const routineDaysInput = undefined;

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);

      expect(routineDaysResult.success).toBe(true);
    });
  });

  describe('Error Handling', () => {
    const idGeneratorRepoMock = new MockIdGenerator();
    const sessionRepoMock = new InMemorySessionRepository();
    const service = new RoutinePlanValidationService(sessionRepoMock, idGeneratorRepoMock);
    it('should return failure when invalid input', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [
        1,
        [
          {
            day: 2,
            name: 'Day 2',
            sessionId: null,
          },
        ],
      ] as never;

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
    });

    it('should return failure when invalid routineDays element', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [
        1,
        [
          {
            day: 2,
            name: 'Day 2',
            sessionId: null,
          },
        ],
      ] as never;

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
    });

    it('should return failure when invalid routineDays element', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [
        {
          day: -1,
          name: '',
        },
      ] as never;

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
    });

    it('should return failure when session not found', async () => {
      const routineDaysInput: RoutinePlanDayFactory[] = [
        {
          day: 1,
          name: 'Day 1',
          sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da0',
        },
      ] as never;

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
    });
  });

  describe('Dependency Interaction', () => {
    const routineDaysInput: RoutinePlanDayFactory[] = [
      {
        day: 1,
        name: 'Day 1',
        sessionId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
      },
      {
        day: 2,
        name: 'Day 2',
        sessionId: null,
      },
    ];

    it('should return failure when idGenerator generate operation fails', async () => {
      const idGeneratorRepoMock = new MockIdGenerator();
      const sessionRepoMock = new InMemorySessionRepository();
      const service = new RoutinePlanValidationService(sessionRepoMock, idGeneratorRepoMock);
      jest
        .spyOn(idGeneratorRepoMock, 'generate')
        .mockReturnValue(Failure(new TechnicalError() as never));

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
      expect(!routineDaysResult.success && routineDaysResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when session findById operation fails', async () => {
      const idGeneratorRepoMock = new MockIdGenerator();
      const sessionRepoMock = new InMemorySessionRepository();
      const service = new RoutinePlanValidationService(sessionRepoMock, idGeneratorRepoMock);
      jest
        .spyOn(sessionRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const routineDaysResult = await service.createRoutineDays(routineDaysInput);
      expect(routineDaysResult.success).toBe(false);
      expect(!routineDaysResult.success && routineDaysResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
