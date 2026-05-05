import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { MockAuthRepository } from '@/modules/auth/mocks/auth.mocks.repository';
import { GetCurrentUser } from '@/modules/user/application/use-cases/get-current-user';
import type { User } from '@/modules/user/domain/user.entity';

describe('GetCurrentUser use case', () => {
  describe('Happy Path', () => {
    it('should get current user successfully', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const useCase = new GetCurrentUser(userRepoMock, authRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;
      authRepoMock.session = {
        avatar: 'https://www.images.com/',
        email: user.email,
      };

      // Execute
      const getCurrentUser = await useCase.execute();

      // Assert result pattern
      expect(getCurrentUser.success).toBe(true);
      expect(getCurrentUser.success && getCurrentUser.data).toBe(user);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when session not found', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const useCase = new GetCurrentUser(userRepoMock, authRepoMock);

      // Execute
      const getCurrentUser = await useCase.execute();

      // Assert result pattern
      expect(getCurrentUser.success).toBe(false);
      expect(!getCurrentUser.success && getCurrentUser.error.code).toBe('SESSION_NOT_FOUND');
    });

    it('should return failure when user not found by email', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const useCase = new GetCurrentUser(userRepoMock, authRepoMock);

      // Data
      authRepoMock.session = {
        avatar: '',
        email: 'not.existing@gmail.com',
      };

      // Execute
      const getCurrentUser = await useCase.execute();

      // Assert result pattern
      expect(getCurrentUser.success).toBe(false);
      expect(!getCurrentUser.success && getCurrentUser.error.code).toBe('USER_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when auth getSession operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();

      const getSessionSpy = jest.spyOn(authRepoMock, 'getSession');
      const useCase = new GetCurrentUser(userRepoMock, authRepoMock);
      jest
        .spyOn(authRepoMock, 'getSession')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Execute
      const getCurrentUser = await useCase.execute();

      // Assert interaction
      expect(getSessionSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUser.success).toBe(false);
      expect(!getCurrentUser.success && getCurrentUser.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when user findByEmail operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const findByEmailSpy = jest.spyOn(userRepoMock, 'findByEmail');
      const useCase = new GetCurrentUser(userRepoMock, authRepoMock);
      jest
        .spyOn(userRepoMock, 'findByEmail')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Data
      const user = userRepoMock.users[0] as User;
      authRepoMock.session = {
        avatar: 'https://www.images.com/',
        email: user.email,
      };

      // Execute
      const getCurrentUser = await useCase.execute();

      // Assert interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUser.success).toBe(false);
      expect(!getCurrentUser.success && getCurrentUser.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
