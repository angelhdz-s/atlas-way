import { CreateDto } from '@/shared/application/dtos/create.types';
import { SessionProps } from '../../domain/session.types';

export type CreateSessionInput = CreateDto<SessionProps>;
