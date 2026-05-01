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
