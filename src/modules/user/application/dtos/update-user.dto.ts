import type { UpdateDto } from '@/shared/application/dtos/create.types';
import type { UserProps } from '../../domain/user.types';

type UpdateProps = Pick<UserProps, 'name' | 'email'>;

export type UpdateUserInput = UpdateDto<UpdateProps>;
