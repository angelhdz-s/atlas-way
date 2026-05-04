import '@testing-library/jest-dom';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import { CreateUser } from '@/modules/user/application/use-cases/create-user';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import type { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';

describe('CreateUser use case', () => {
  describe('Happy Path', () => {
    it('should create user successfully and persist them', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorMock = new MockIdGenerator();
      const createSpy = jest.spyOn(userRepoMock, 'create');
      const useCase = new CreateUser(userRepoMock, idGeneratorMock);
      const userData: CreateUserInput = {
        email: 'angel1234@gmail.com',
        name: 'Angel',
        roleId: 'base',
      };

      // Config
      idGeneratorMock.id = 'user-id-1234';

      // Execute
      const createUserResult = await useCase.execute(userData);

      // Assert interaction
      expect(createSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(createUserResult.success).toBe(true);
      expect(createUserResult.success && createUserResult.data.id).toBe('user-id-1234');
      expect(createUserResult.success && createUserResult.data.email).toBe('angel1234@gmail.com');

      // Verify DB state
      expect(userRepoMock.users).toHaveLength(11); // initial users (10) + 1
    });
  });

  describe('Error Handling', () => {
    it('should return failure result when user email already exists', async () => {
      // Set up
      const userRepoMock2 = new InMemoryUserRepository();
      const idGeneratorMock = new MockIdGenerator();
      const createSpy = jest.spyOn(userRepoMock2, 'create');
      const useCase = new CreateUser(userRepoMock2, idGeneratorMock);

      // Config
      userRepoMock2.users[0]?.changeEmail('angel1234@gmail.com');
      idGeneratorMock.id = 'user-id-1234';

      // Data
      const userData: CreateUserInput = {
        email: 'angel1234@gmail.com',
        name: 'Angel',
        roleId: 'base',
      };

      // Execute
      const createUserResult = await useCase.execute(userData);

      // Assert interaction -> do not create
      expect(createSpy).toHaveBeenCalledTimes(0);

      // Assert result pattern
      expect(createUserResult.success).toBe(false);
      expect(!createUserResult.success && createUserResult.error.code).toBe('TECHNICAL_ERROR'); // <- update for the correspondent User error

      // Verify DB state
      expect(userRepoMock2.users).toHaveLength(10); // no users added
    });
  });

  describe('Dependency Interaction', () => {
    it('sould return failure when repository create operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new CreateUser(userRepoMock, idGeneratorMock);
      jest.spyOn(userRepoMock, 'create').mockResolvedValue(Failure(new TechnicalError() as never));

      // Config

      // Data
      const userData: CreateUserInput = {
        email: 'angel1234@gmail.com',
        name: 'Angel',
        roleId: 'base',
      };

      // Execute
      const createUserResult = await useCase.execute(userData);

      // Assert result pattern
      expect(createUserResult.success).toBe(false);
      expect(!createUserResult.success && createUserResult.error.code).toBe('TECHNICAL_ERROR');

      // Verify DB state
      expect(userRepoMock.users).toHaveLength(10); // no users added
    });
  });
});
