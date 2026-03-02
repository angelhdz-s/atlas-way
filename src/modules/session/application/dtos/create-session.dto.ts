import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { SessionProps } from '../../domain/session.types';

export type CreateSessionInput = CreateDto<SessionProps>;
