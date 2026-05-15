import '@testing-library/jest-dom';
import type { CreateSessionInput } from '@/modules/session/application/dtos/create-session.dto';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { CreateSession } from '@/modules/session/application/use-cases/create-session';
import { InMemorySessionRepository } from '@/modules/session/mocks/session.mocks.repository';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { InMemoryExerciseRepository } from '@/modules/exercise/mocks/exercise.mocks.repository';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';

function createExercise(): Exercise {
  const newExercise = Exercise.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
    name: 'Exercise',
    description: null,
    reps: 1,
    sets: 1,
    weight: 1.25,
    muscles: [],
    userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
  });

  if (!newExercise.success) throw new Error('Unable to create exercise instance');
  return newExercise.data;
}

describe('CreateSession use case', () => {
  describe('Happy Path', () => {
    it('should create session successfully', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);
      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(true);
      expect(createResult.success && createResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(createResult.success && createResult.data.name).toBe('Push Day');
      expect(sessionRepoMock.sessions).toHaveLength(3);
    });

    it('should create session with null description successfully', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);
      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(true);
      expect(createResult.success && createResult.data.id).toBe(
        '1df38173-6fae-4abb-8cb2-ce33b6c24da4'
      );
      expect(createResult.success && createResult.data.name).toBe('Push Day');
      expect(sessionRepoMock.sessions).toHaveLength(3);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when exercise not found', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da9'],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da6';

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('EXERCISE_NOT_FOUND');
      expect(sessionRepoMock.sessions).toHaveLength(2);
    });

    it('should return failure when invalid session data', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData = {
        description: null,
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da7';

      const createResult = await useCase.execute(sessionData as never);

      expect(createResult.success).toBe(false);
      expect(
        !createResult.success && createResult.error.code.startsWith('INVALID_SESSION_DATA')
      ).toBe(true);
      expect(sessionRepoMock.sessions).toHaveLength(2);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository create operation fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);

      jest
        .spyOn(sessionRepoMock, 'create')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24da8';

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(sessionRepoMock.sessions).toHaveLength(2);
    });

    it('should return failure when idGenerator generate operation fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);

      jest
        .spyOn(idGeneratorMock, 'generate')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(sessionRepoMock.sessions).toHaveLength(2);
    });

    it('should return failure when exercise repository findById fails', async () => {
      const sessionRepoMock = new InMemorySessionRepository();
      const exerciseRepoMock = new InMemoryExerciseRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateSession(sessionRepoMock, exerciseRepoMock, idGeneratorMock);

      jest
        .spyOn(exerciseRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const newExercise = createExercise();
      const exerciseResult = await exerciseRepoMock.create(newExercise);
      if (!exerciseResult.success) throw new Error('Unable to register exercise');

      const sessionData: CreateSessionInput = {
        name: 'Push Day',
        description: 'Focues on push muscle development',
        userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
        exerciseIds: ['1df38173-6fae-4abb-8cb2-ce33b6c24da4'],
      };

      idGeneratorMock.id = '1df38173-6fae-4abb-8cb2-ce33b6c24d10';

      const createResult = await useCase.execute(sessionData);

      expect(createResult.success).toBe(false);
      expect(!createResult.success && createResult.error.code).toBe('TECHNICAL_ERROR');
      expect(sessionRepoMock.sessions).toHaveLength(2);
    });
  });
});
