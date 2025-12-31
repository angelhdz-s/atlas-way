import { UseCase } from '@/shared/application/usecase';
import { ISessionReporitory } from '../../domain/session.repository';

export class GetAllSessions implements UseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute() {
		return await this.repository.findAll();
	}
}
