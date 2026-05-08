import '@testing-library/jest-dom';
import { Failure } from '@/shared/domain/result';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
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
      expect(userRepoMock.users[0]?.name).not.toBe('Updated Name');

      // Execute
      const updateUserResult = await useCase.execute(user.id, {
        name: 'Updated Name',
      });

      // Assert result pattern
      expect(updateUserResult.success).toBe(true);
      expect(updateUserResult.success && updateUserResult.data.id).toBe(user.id);
      expect(updateUserResult.success && updateUserResult.data.name).toBe('Updated Name');

      // Verify DB state
      expect(userRepoMock.users[0]?.name).toBe('Updated Name');
    });
  });

  describe('Error Handling', () => {
    it('should return failure result when user not found', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);

      // Data
      const userData: UpdateUserInput = {
        email: 'user.email@gmail.com',
        name: 'New Name',
      };

      // Execute
      const updateUserResult = await useCase.execute('not-existing-id-1234', userData);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe('USER_NOT_FOUND');
    });

    it('should return failure result when invalid email provided', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;
      const userData: UpdateUserInput = {
        email: 'user.email@outlook.com',
      };

      // Execute
      const updateUserResult = await useCase.execute(user.id, userData);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe(
        'INVALID_USER_DATA.EMAIL'
      );
    });

    it('should return failure result when invalid name provided', async () => {
      // Set up
      const userRepoMock = new InMemoryUserRepository();
      const useCase = new UpdateUser(userRepoMock);

      // Data
      const user = userRepoMock.users[0] as User;
      const userData: UpdateUserInput = {
        invalidKey: 'Skipped',
        name: 'New',
      } as UpdateUserInput;

      // Execute
      const updateUserResult = await useCase.execute(user.id, userData);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe(
        'INVALID_USER_DATA.NAME'
      );
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
        email: 'user.email@gmail.com',
        name: 'New Name',
      };

      // Execute
      const updateUserResult = await useCase.execute(user.id, userData);

      // Assert interaction
      expect(updateSpy).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe('TECHNICAL_ERROR');

      // Assert DB state
      expect(userRepoMock.users[0]?.name).not.toBe('New Name');
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
        email: 'user.email@gmail.com',
        name: 'New Name',
      };

      // Execute
      const updateUserResult = await useCase.execute(user.id, userData);

      // Assert interaction
      expect(findById).toHaveBeenCalledTimes(1);

      // Assert result pattern
      expect(updateUserResult.success).toBe(false);
      expect(!updateUserResult.success && updateUserResult.error.code).toBe('TECHNICAL_ERROR');

      // Assert DB state
      expect(userRepoMock.users[0]?.name).not.toBe('New Name');
    });
  });
});
