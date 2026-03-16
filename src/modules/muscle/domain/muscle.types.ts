import type { UserProps } from '@/modules/user/domain/user.types';

export type MuscleProps = {
  readonly id: number;
  name: string;
  description: string | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: UserProps['id'];
  readonly group: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    section: {
      id: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};
