import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { UpdateUser } from '@/modules/user/application/use-cases/update-user';
import { InMemoryUserRepository } from '@/modules/user/mocks/user.mocks.repository';
import type { User } from '@/modules/user/domain/user.entity';
import type { UpdateUserInput } from '@/modules/user/application/dtos/update-user.dto';

describe('UpdateUser use case', () => {
  describe('Happy Path', () => {
    it('should update user successfully and persist them', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;

      // Verify DB state before execution
      expect(userRepoMock.users[0]?.name).not.toBe('Angel');

      // Execute
      const updateUserResult = await useCase.execute(user.id, {
        name: 'Angel',
      });

      // Assert result pattern
      expect(updateUserResult.success).toBe(true);
      expect(updateUserResult.success && updateUserResult.data.id).toBe(user.id);
      expect(updateUserResult.success && updateUserResult.data.name).toBe('Angel');

      // Verify DB state
      expect(userRepoMock.users[0]?.name).toBe('Angel');
    });
  });

  describe('Error Handling', () => {
    it('should return failure result when user not found', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const idGeneratorMock = new MockIdGenerator();
      const useCase = new UpdateUser(userRepoMock);

      // Config
      userRepoMock.users[0]?.changeEmail('angel1234@gmail.com');
      idGeneratorMock.id = 'user-id-1234';

      // Data
      const userData: UpdateUserInput = {
        email: 'angel@gmail.com',
        name: 'Angel',
      };

      // Execute
      const updateUserResult = await useCase.execute('not-existing-id-1234', userData);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe('USER_NOT_FOUND');
    });
  });

  describe('Dependency Interaction', () => {
    it('should return failure when repository update operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);
      const updateSpy = jest
        .spyOn(userRepoMock, 'update')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Data
      const user = userRepoMock.users[0] as User;
      const userData: UpdateUserInput = {
        email: 'angel1234@gmail.com',
        name: 'Angel',
      };

      // Execute

      // Assert interaction
      expect(updateSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(createUserResult.success).toBe(false);
      expect(!createUserResult.success && createUserResult.error.code).toBe('TECHNICAL_ERROR');

      // Verify DB state
      expect(userRepoMock.users).toHaveLength(10);
    });

    it('should return failure when repository finById operation fails', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);
      const findById = jest
        .spyOn(userRepoMock, 'findById')
        .mockResolvedValue(Failure(new TechnicalError() as never));

      // Data
      const user = userRepoMock.users[0] as User;
      const userData: UpdateUserInput = {
        email: 'angel1234@gmail.com',
        name: 'Angel',
      };

      // Execute
      // Assert interaction
      expect(findById).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(createUserResult.success).toBe(false);
      expect(!createUserResult.success && createUserResult.error.code).toBe('TECHNICAL_ERROR');

      // Verify DB state
      expect(userRepoMock.users).toHaveLength(10);
    });
  });
});
