import '@testing-library/jest-dom';
import { MockAuthRepository } from '../../mocks/auth.mocks.repository';
import { GetCurrentSession } from './get-current-session';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';

describe('GetCurrentSession use case', () => {
  describe('Happy Path', () => {
    it('should get current session successfully', async () => {
      const authRepoMock = new MockAuthRepository();
      const getCurrentSession = new GetCurrentSession(authRepoMock);

      // When session exists
      authRepoMock.session = {
        avatar: '',
        email: 'email@gmail.com',
      };
      const sessionResult = await getCurrentSession.execute();

      // When session not exists
      authRepoMock.session = null;
      const nullSessionResult = await getCurrentSession.execute();

      // Assert result pattern - when session exists
      expect(sessionResult.success).toBe(true);
      expect(sessionResult.success && sessionResult.data?.email).toBe('email@gmail.com');

      // Assert result pattern - when session not exists
      expect(nullSessionResult.success).toBe(true);
      expect(nullSessionResult.success && nullSessionResult.data).toBe(null);
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when auth getSession operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const getCurrentSession = new GetCurrentSession(authRepoMock);
      const getCurrentSessionSpy = jest
        .spyOn(authRepoMock, 'getSession')
        .mockResolvedValueOnce(Failure(new TechnicalError() as never));

      const sessionResult = await getCurrentSession.execute();

      // Assert interaction
      expect(getCurrentSessionSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(sessionResult.success).toBe(false);
      expect(!sessionResult.success && sessionResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
