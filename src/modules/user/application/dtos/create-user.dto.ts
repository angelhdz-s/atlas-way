import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { UserProps } from '../../domain/user.types';

export type CreateUserInput = CreateDto<UserProps>;
