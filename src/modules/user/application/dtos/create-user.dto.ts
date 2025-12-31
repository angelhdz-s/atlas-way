import { CreateDto } from '@/shared/application/dtos/create.types';
import { UserProps } from '../../domain/user.types';

export type CreateUserInput = CreateDto<UserProps>;
