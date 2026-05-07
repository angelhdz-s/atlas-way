import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { MockAuthRepository } from '@/modules/auth/mocks/auth.mocks.repository';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { Login } from '@/modules/auth/application/use-cases/login';
import type { User } from '@/modules/user/domain/user.entity';

describe('Login use case', () => {
  describe('Happy Path', () => {
    it('should login and create user successfully when not registered', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const loginResult = await login.execute({
        email: 'new.email@gmail.com',
        name: 'New Name',
      });

      // Assert result pattern
      expect(loginResult.success).toBe(true);
      expect(loginResult.success && loginResult.data).toBe(null);

      // Assert DB state
      expect(userRepoMock.users).toHaveLength(11); // 10 + 1
      expect(userRepoMock.users[10]?.name).toBe('New Name');
    });

    it('should login and not create user when already registered', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const user = userRepoMock.users[0] as User;

      const loginResult = await login.execute({
        email: user.email,
        name: user.name,
      });

      // Assert result pattern
      expect(loginResult.success).toBe(true);
      expect(loginResult.success && loginResult.data).toBe(null);

      // Assert DB state
      expect(userRepoMock.users).toHaveLength(10); // no changes
    });
  });

  describe('Error Handling', () => {
    it('should return failure when a session is already active', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      authRepoMock.session = {
        avatar: '',
        email: 'email@gmail.com',
      };

      const loginResult = await login.execute({
        email: '',
        name: '',
      });

      // Assert result pattern
      expect(loginResult.success).toBe(false);
      expect(!loginResult.success && loginResult.error.code).toBe('SESSION_ALREADY_ACTIVE');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when auth getSession operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const getSessionSpy = jest
        .spyOn(authRepoMock, 'getSession')
        .mockResolvedValue(Failure(new TechnicalError() as never));
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const loginResult = await login.execute({ email: '', name: '' });

      // Assert Interaction
      expect(getSessionSpy).toHaveBeenCalledTimes(1);

      // Assert Result pattern
      expect(loginResult.success).toBe(false);
      expect(!loginResult.success && loginResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when user findByEmail operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const findByEmailSpy = jest
        .spyOn(userRepoMock, 'findByEmail')
        .mockResolvedValue(Failure(new TechnicalError() as never));
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const loginResult = await login.execute({ email: '', name: '' });

      // Assert Interaction
      expect(findByEmailSpy).toHaveBeenCalledTimes(1);

      // Assert Result pattern
      expect(loginResult.success).toBe(false);
      expect(!loginResult.success && loginResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when user create operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const createSpy = jest
        .spyOn(userRepoMock, 'create')
        .mockResolvedValue(Failure(new TechnicalError() as never));
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const loginResult = await login.execute({ email: 'new.user@gmail.com', name: 'New User' });

      // Assert Interaction
      expect(createSpy).toHaveBeenCalledTimes(1);

      // Assert Result pattern
      expect(loginResult.success).toBe(false);
      expect(!loginResult.success && loginResult.error.code).toBe('TECHNICAL_ERROR');
    });

    it('should return failure when idGenerator generate operation fails', async () => {
      const authRepoMock = new MockAuthRepository();
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorRepoMock = new MockIdGenerator();
      const generateSpy = jest
        .spyOn(idGeneratorRepoMock, 'generate')
        .mockResolvedValue(Failure(new TechnicalError() as never));
      const login = new Login(authRepoMock, userRepoMock, idGeneratorRepoMock);

      const loginResult = await login.execute({ email: 'new.user@gmail.com', name: 'New User' });

      // Assert Interaction
      expect(generateSpy).toHaveBeenCalledTimes(1);

      // Assert Result pattern
      expect(loginResult.success).toBe(false);
      expect(!loginResult.success && loginResult.error.code).toBe('TECHNICAL_ERROR');
    });
  });
});
