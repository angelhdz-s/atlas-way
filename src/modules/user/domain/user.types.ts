import type { ClassMethods } from '@/shared/shared.types';
import type { User } from '@/modules/user/domain/user.entity';
import type { RoleIds } from '@/modules/user/domain/user.constants.roles';

export type UserProps = {
  readonly id: string;
  name: string;
  email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly role: {
    id: RoleIds;
    name: string;
  };
};

export type UserFactoryData = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt' | 'role'> & {
  roleId: string;
};

export type UserMethods = ClassMethods<User>;
