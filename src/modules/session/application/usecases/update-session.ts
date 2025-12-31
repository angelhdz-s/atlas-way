import { UseCase } from '@/shared/application/usecase';
import { ISessionReporitory } from '../../domain/session.repository';
import { SessionProps } from '../../domain/session.types';
import { UpdateSessionInput } from '../dto/update-session.dto';
import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '../../domain/errors/session.errors';

export class UpdateSessions implements UseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute(id: SessionProps['id'], data: UpdateSessionInput) {
		const existingSession = await this.repository.findById(id);

		if (!existingSession.success || !existingSession.data) {
			if (!existingSession.success) return Failure(existingSession.error);
			return Failure(new SessionNotFoundError('Session not found'));
		}

		const session = existingSession.data;

		if (data.name) session.changeName(data.name);
		if (data.description) session.changeDescription(data.description);

		return await this.repository.update(session);
	}
}
