import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { Muscle } from '@/modules/muscle/domain/muscle.entity';
import { InMemoryMuscleRepository } from '@/modules/muscle/mocks/muscle.mocks.repository';
import { MuscleValidationService } from '@/modules/muscle/domain/services/muscle.validation.service';

function createMuscle(id: number): Muscle {
  const muscle = new Muscle({
    id,
    name: 'Exercise',
    description: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    group: {
      id: 1,
      name: 'Muscular Group',
      createdAt: new Date(),
      updatedAt: new Date(),
      section: {
        id: 1,
        name: 'Section',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
  });

  return muscle;
}

describe('MuscleValidationService', () => {
  describe('Happy path', () => {
    it('should return exercises list successfully', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const muscle = createMuscle(3);
      muscleRepoMock.muscles.push(muscle);

      const musclesResult = await service.validateAndFetch([3]);

      expect(musclesResult.success).toBe(true);
      expect(musclesResult.success && musclesResult.data?.[0] instanceof Muscle).toBe(true);
    });

    it('should return null successfully when provided undefined input', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const exerciseResult = await service.validateAndFetch(undefined);

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data).toBe(null);
    });

    it('should return ampty array successfully when empty array input', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const exerciseResult = await service.validateAndFetch([]);

      expect(exerciseResult.success).toBe(true);
      expect(exerciseResult.success && exerciseResult.data).toHaveLength(0);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when input not array nor nullish', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const exercise = createMuscle(4);
      muscleRepoMock.muscles.push(exercise);

      const exerciseResult = await service.validateAndFetch({} as never);

      expect(exerciseResult.success).toBe(false);
    });

    it('should return failure when input not string array ', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const exercise = createMuscle(4);
      muscleRepoMock.muscles.push(exercise);

      const exerciseResult = await service.validateAndFetch([4.5, 'Hello'] as never);

      expect(exerciseResult.success).toBe(false);
    });

    it('should return failure when exercise not found ', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      const exerciseResult = await service.validateAndFetch([4]);

      expect(exerciseResult.success).toBe(false);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when exercise findById operation fails', async () => {
      const muscleRepoMock = new InMemoryMuscleRepository();
      const service = new MuscleValidationService(muscleRepoMock);

      jest
        .spyOn(muscleRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      const exercise = createMuscle(4);
      muscleRepoMock.muscles.push(exercise);

      const exercisesResult = await service.validateAndFetch([4]);

      expect(exercisesResult.success).toBe(false);
      expect(!exercisesResult.success && exercisesResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
