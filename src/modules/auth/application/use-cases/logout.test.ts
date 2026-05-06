import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { MockAuthRepository } from '@/modules/auth/mocks/auth.mocks.repository';
import { Logout } from '@/modules/auth/application/use-cases/logout';

describe('Logout use case', () => {
  describe('Happy Path', () => {
    it('should logout successfully', async () => {
      const authRepoMock = new MockAuthRepository();
      const logout = new Logout(authRepoMock);
      authRepoMock.session = {
        avatar: '',
        email: '',
      };

      const logoutResult = await logout.execute();

      // Assert result pattern
      expect(logoutResult.success).toBe(true);
      expect(logoutResult.success && logoutResult.data).toBe(null);
    });
  });

  describe('Error Handling', () => {
    it('should return failure when session not found', async () => {
      const authRepoMock = new MockAuthRepository();
      const logout = new Logout(authRepoMock);

      const logoutResult = await logout.execute();

      // Assert result pattern
      expect(logoutResult.success).toBe(false);
      expect(!logoutResult.success && logoutResult.error.code).toBe('SESSION_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when auth getSession operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const getSessionSpy = jest
        .spyOn(authRepoMock, 'getSession')
        .mockResolvedValue(Failure(new TechnicalError() as never));
      const logout = new Logout(authRepoMock);

      const logoutResult = await logout.execute();

      // Assert interaction
      expect(getSessionSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(logoutResult.success).toBe(false);
      expect(!logoutResult.success && logoutResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
