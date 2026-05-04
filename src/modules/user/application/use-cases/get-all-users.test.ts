import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { GetAllUsers } from '@/modules/user/application/use-cases/get-all-users';

describe('GetAllUsers use case', () => {
  describe('Happy Path', () => {
    it('should get all users successfully', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const createSpy = jest.spyOn(userRepoMock, 'findAll');
      const useCase = new GetAllUsers(userRepoMock);

      // Execute
      const getAllUsers = await useCase.execute();

      // Assert interaction
      expect(createSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getAllUsers.success).toBe(true);
      expect(getAllUsers.success && getAllUsers.data).toHaveLength(10);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository findAll operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new GetAllUsers(userRepoMock);
      jest.spyOn(userRepoMock, 'findAll').mockResolvedValue(Failure(new TechnicalError() as never));

      // Execute
      const createUserResult = await useCase.execute();

      // Assert result pattern
      expect(createUserResult.success).toBe(false);
      expect(!createUserResult.success && createUserResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
