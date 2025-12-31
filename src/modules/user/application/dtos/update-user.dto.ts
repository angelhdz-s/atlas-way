import { UpdateDto } from '@/shared/application/dtos/create.types';
import { UserProps } from '../../domain/user.types';

type UpdateProps = Pick<UserProps, 'name' | 'email'>;

export type UpdateUserInput = UpdateDto<UpdateProps>;
