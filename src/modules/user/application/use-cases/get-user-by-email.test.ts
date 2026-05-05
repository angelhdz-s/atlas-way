import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { GetUserByEmail } from '@/modules/user/application/use-cases/get-user-by-email';
import type { User } from '@/modules/user/domain/user.entity';

describe('GetUserByEmail use case', () => {
  describe('Happy Path', () => {
    it('should get user by email successfully', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new GetUserByEmail(userRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;

      // Execute
      const getUserByEmail = await useCase.execute(user.email);
      const getUserByEmailNotFound = await useCase.execute('email.never@gmail.com');

      // Assert result pattern when user found
      expect(getUserByEmail.success).toBe(true);
      expect(getUserByEmail.success && getUserByEmail.data?.name).toBe(user.name);
      // Assert result pattern When user NOT found
      expect(getUserByEmailNotFound.success).toBe(true);
      expect(getUserByEmailNotFound.success && getUserByEmailNotFound.data).toBe(null);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when user findByEmail operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new GetUserByEmail(userRepoMock);
      const findByEmailSpy = jest
        .spyOn(userRepoMock, 'findByEmail')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Execute
      const getUserByEmail = await useCase.execute('email.never@gmail.com');

      // Assert interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getUserByEmail.success).toBe(false);
      expect(!getUserByEmail.success && getUserByEmail.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
