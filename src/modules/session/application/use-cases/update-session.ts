import { UseCase } from '@/shared/application/use-case';
import { ISessionRepository } from '../../domain/session.repository';
import { SessionProps } from '../../domain/session.types';
import { UpdateSessionInput } from '../dtos/update-session.dto';
import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '../../domain/errors/session.errors';

export class UpdateSessions implements UseCase {
	constructor(private repository: ISessionRepository) {}

	async execute(id: SessionProps['id'], data: UpdateSessionInput) {
		const sessionResult = await this.repository.findById(id);

		if (!sessionResult.success || !sessionResult.data) {
			if (!sessionResult.success) return Failure(sessionResult.error);
			return Failure(new SessionNotFoundError());
		}

		const session = sessionResult.data;

		if (data.name) session.changeName(data.name);
		if (data.description) session.changeDescription(data.description);

		return await this.repository.update(session);
	}
}
