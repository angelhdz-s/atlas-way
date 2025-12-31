import { UpdateDto } from '@/shared/application/dtos/create.types';
import { SessionProps } from '../../domain/session.types';

type UpdateProps = Pick<SessionProps, 'name' | 'description'>;

export type UpdateSessionInput = UpdateDto<UpdateProps>;
