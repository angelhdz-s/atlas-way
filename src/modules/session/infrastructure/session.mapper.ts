import { Sessions as PrismaSession } from '@/prisma/client';
import { Session } from '../domain/session.entity';
import { SessionProps } from '../domain/session.types';
import { SessionDTO } from '../application/dtos/session.dto';

export class SessionMapper {
	static toDomain(data: PrismaSession): Session {
		const session: SessionProps = {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
		};

		return new Session(session);
	}

	static toPersistence(data: Session): PrismaSession {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
		};
	}
	static toDTO(data: Session): SessionDTO {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
		};
	}
}
