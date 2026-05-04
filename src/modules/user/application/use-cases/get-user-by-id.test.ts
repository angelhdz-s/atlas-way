import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { GetUserById } from '@/modules/user/application/use-cases/get-user-by-id';
import type { User } from '@/modules/user/domain/user.entity';

describe('GetUserById use case', () => {
  describe('Happy Path', () => {
    it('should get user by id successfully', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const findByIdSpy = jest.spyOn(userRepoMock, 'findById');
      const useCase = new GetUserById(userRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;

      // Execute
      const getUserById = await useCase.execute(user.id);
      const getUserByIdNotFound = await useCase.execute('userid-never-1234');

      // Assert interaction
      expect(findByIdSpy).toHaveBeenCalledTimes(2);

      // Assert result pattern when user found
      expect(getUserById.success).toBe(true);
      expect(getUserById.success && getUserById.data).toBe(user);
      // Assert result pattern when user NOT found
      expect(getUserByIdNotFound.success).toBe(true);
      expect(getUserByIdNotFound.success && getUserByIdNotFound.data).toBe(null);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when user findById operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const findByIdSpy = jest.spyOn(userRepoMock, 'findById');
      const useCase = new GetUserById(userRepoMock);
      jest
        .spyOn(userRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Execute
      const getUserById = await useCase.execute('userid-never-1234');

      // Assert interaction
      expect(findByIdSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getUserById.success).toBe(false);
      expect(!getUserById.success && getUserById.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
