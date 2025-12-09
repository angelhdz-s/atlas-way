import { UpdateSession } from '../domain/session.entity';
import { ISessionReporitory } from '../domain/session.repository';
import { SessionProps } from '../domain/session.schema';

export class UpdateSessionsUseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute(id: SessionProps['id'], data: UpdateSession) {
		return await this.repository.update(id, data);
	}
}
