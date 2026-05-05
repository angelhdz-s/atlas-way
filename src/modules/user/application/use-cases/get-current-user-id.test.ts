import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { MockAuthRepository } from '@/modules/auth/mocks/auth.mocks.repository';
import { GetCurrentUserId } from '@/modules/user/application/use-cases/get-current-user-id';
import type { User } from '@/modules/user/domain/user.entity';

describe('GetUserById use case', () => {
  describe('Happy Path', () => {
    it('should get current user ID successfully', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const findByEmailSpy = jest.spyOn(userRepoMock, 'findByEmail');
      const useCase = new GetCurrentUserId(userRepoMock, authRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;
      authRepoMock.session = {
        avatar: 'https://www.images.com/',
        email: user.email,
      };

      // Execute
      const getCurrentUserId = await useCase.execute();

      // Assert interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUserId.success).toBe(true);
      expect(getCurrentUserId.success && getCurrentUserId.data).toBe(user.id);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when session not found', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const getSessionSpy = jest.spyOn(authRepoMock, 'getSession');
      const useCase = new GetCurrentUserId(userRepoMock, authRepoMock);

      // Execute
      const getCurrentUserId = await useCase.execute();

      // Assert interaction
      expect(getSessionSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUserId.success).toBe(false);
      expect(!getCurrentUserId.success && getCurrentUserId.error.code).toBe('SESSION_NOT_FOUND');
    });

    it('should return failure when user email not found', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const findByEmailSpy = jest.spyOn(userRepoMock, 'findByEmail');
      const useCase = new GetCurrentUserId(userRepoMock, authRepoMock);

      // Data
      authRepoMock.session = {
        avatar: '',
        email: 'not.existing@gmail.com',
      };

      // Execute
      const getCurrentUserId = await useCase.execute();

      // Assert interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUserId.success).toBe(false);
      expect(!getCurrentUserId.success && getCurrentUserId.error.code).toBe('USER_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when auth getSession operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();

      const getSessionSpy = jest.spyOn(authRepoMock, 'getSession');
      const useCase = new GetCurrentUserId(userRepoMock, authRepoMock);
      jest
        .spyOn(authRepoMock, 'getSession')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Execute
      const getCurrentUserId = await useCase.execute();

      // Assert interaction
      expect(getSessionSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUserId.success).toBe(false);
      expect(!getCurrentUserId.success && getCurrentUserId.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when user findByEmail operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const authRepoMock = new MockAuthRepository();
      const findByEmailSpy = jest.spyOn(userRepoMock, 'findByEmail');
      const useCase = new GetCurrentUserId(userRepoMock, authRepoMock);
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
      const getCurrentUserId = await useCase.execute();

      // Assert interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(getCurrentUserId.success).toBe(false);
      expect(!getCurrentUserId.success && getCurrentUserId.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
