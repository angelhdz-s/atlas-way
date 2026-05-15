import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { UpdateSession } from '@/modules/session/application/use-cases/update-session';
import { InMemorySessionRepository } from '@/modules/session/mocks/session.mocks.repository';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';

describe('UpdateSession use case', () => {
  describe('Happy Path', () => {
    it('should update session fields', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      const exercise = new Exercise({
        id: '3df38173-6fae-4abb-8cb2-ce33b6c24da4',
        name: 'Bench Press',
        description: 'Chest exercise',
        sets: 3,
        reps: 10,
        weight: 50,
        muscles: [],
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24001',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      exerciseRepoMock.exercises.push(exercise);

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        name: 'New Push Day',
        description: 'Updated workout',
        exerciseIds: ['3df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(true);
      expect(result.success && result.data.name).toBe('New Push Day');
      expect(result.success && result.data.description).toBe('Updated workout');
      expect(result.success && result.data.exercises).toHaveLength(1);
    });

    it('should update with empty exercises array', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        exerciseIds: [],
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(true);
      expect(result.success && result.data.exercises).toHaveLength(0);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when session not found', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      const sessionId = 'non-existent-session-id';
      const updateData: UpdateSessionInput = {
        name: 'Updated Name',
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('SESSION_NOT_FOUND');
    });

    it('should return failure when invalid session data', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        name: 'AB',
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code.startsWith('INVALID_SESSION_DATA')).toBe(true);
    });

    it('should return failure when exercises not found', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        exerciseIds: ['9df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('EXERCISE_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository findById operation fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      jest
        .spyOn(sessionRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        name: 'Updated Name',
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when repository update operation fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      jest
        .spyOn(sessionRepoMock, 'update')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        name: 'Updated Name',
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when exerciseRepository findById fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const useCase = new UpdateSession(sessionRepoMock, exerciseRepoMock);

      jest
        .spyOn(exerciseRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const sessionId = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
      const updateData: UpdateSessionInput = {
        exerciseIds: ['3df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const result = await useCase.execute(sessionId, updateData);

      expect(result.success).toBe(false);
      expect(!result.success && result.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
