import { UseCase } from '@/shared/application/usecase';
import { ISessionReporitory } from '../../domain/session.repository';
import { SessionProps } from '../../domain/session.types';

export class GetSessionById implements UseCase {
	constructor(private repository: ISessionReporitory) {}

	async execute(id: SessionProps['id']) {
		return await this.repository.findById(id);
	}
}
