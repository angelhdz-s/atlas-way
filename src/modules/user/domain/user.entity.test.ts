import '@testing-library/jest-dom';
import { User } from './user.entity';

describe('User entity', () => {
  describe('create()', () => {
    it('should create user instance successfully', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      // Assert result pattern
      expect(userResult.success).toBe(true);
      expect(userResult.success && userResult.data instanceof User).toBe(true);
    });

    it('should return failure when invalid id provided', async () => {
      const userResult = User.create('invalid-id', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      // Assert result pattern
      expect(userResult.success).toBe(false);
      expect(!userResult.success && userResult.error.code).toBe('INVALID_USER_DATA');
    });

    it('should return failure when invalid email provided', async () => {
      const newUserResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new$email.com',
        name: 'New User',
        roleId: 'base',
      });

      // Assert result pattern
      expect(newUserResult.success).toBe(false);
      expect(!newUserResult.success && newUserResult.error.code).toBe('INVALID_USER_DATA.EMAIL');
    });

    it('should return failure when invalid roleId provided', async () => {
      const newUserResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'notValidRole',
      });

      // Assert result pattern
      expect(newUserResult.success).toBe(false);
      expect(!newUserResult.success && newUserResult.error.code).toBe('ROLE_NOT_FOUND');
    });
  });

  describe('changeName()', () => {
    it('should change user name successfully', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeName('New Name');

      // Assert result pattern
      expect(nameResult.success).toBe(true);
      expect(nameResult.success && nameResult.data).toBe(null);

      // Assert property update
      expect(user.name).toBe('New Name');
    });

    it('should return failure when name provided has invalid minimum length', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeName('123');

      // Assert result pattern
      expect(nameResult.success).toBe(false);
      expect(!nameResult.success && nameResult.error.code).toBe('INVALID_USER_DATA.NAME');

      // Assert no property changes
      expect(user.name).not.toBe('123');
    });

    it('should return failure when name provided has invalid maximum length', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeName('New User With A Lot Of Characters Lenght');

      // Assert result pattern
      expect(nameResult.success).toBe(false);
      expect(!nameResult.success && nameResult.error.code).toBe('INVALID_USER_DATA.NAME');

      // Assert no property changes
      expect(user.name).not.toBe('New User With A Lot Of Characters Lenght');
    });
  });
  describe('changeEmail()', () => {
    it('should change user email successfully', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeEmail('new.user.email@gmail.com');

      // Assert result pattern
      expect(nameResult.success).toBe(true);
      expect(nameResult.success && nameResult.data).toBe(null);

      // Assert property update
      expect(user.email).toBe('new.user.email@gmail.com');
    });

    it('should return failure when email provided has invalid format', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeEmail('not.a.valid.user.email@xs$gmail.com');

      // Assert result pattern
      expect(nameResult.success).toBe(false);
      expect(!nameResult.success && nameResult.error.code).toBe('INVALID_USER_DATA.EMAIL');

      // Assert no property changes
      expect(user.email).not.toBe('not.a.valid.user.email@xs$gmail.com');
    });

    it('should return failure when email provided has invalid service provider', async () => {
      const userResult = User.create('1df38173-6fae-4abb-8cb2-ce33b6c24da4', {
        email: 'new@gmail.com',
        name: 'New User',
        roleId: 'base',
      });

      const user = (userResult.success && userResult.data) as User;

      const nameResult = user.changeEmail('not.valid@service.com');

      // Assert result pattern
      expect(nameResult.success).toBe(false);
      expect(!nameResult.success && nameResult.error.code).toBe('INVALID_USER_DATA.EMAIL');

      // Assert no property changes
      expect(user.name).not.toBe('not.valid@service.com');
    });
  });
});
