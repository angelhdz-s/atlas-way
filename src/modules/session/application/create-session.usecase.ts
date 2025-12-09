import { NewSession } from '../domain/session.entity';
import { ISessionReporitory } from '../domain/session.repository';

export class CreateSessionUseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute(data: NewSession) {
		return await this.repository.create(data);
	}
}
