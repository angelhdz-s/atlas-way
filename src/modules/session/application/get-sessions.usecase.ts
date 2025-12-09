import { ISessionReporitory } from '../domain/session.repository';

export class GetSessionsUseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute() {
		return await this.repository.findAll();
	}
}
