import { ISessionReporitory } from '../domain/session.repository';
import { SessionProps } from '../domain/session.schema';

export class GetSessionUseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute(id: SessionProps['id']) {
		return await this.repository.findById(id);
	}
}
