import { Prisma, Sessions as PrismaSession } from '@/prisma/client';
import { Session as DomainSession, NewSession, UpdateSession } from '../domain/session.entity';
import { SessionProps, UpdateSessionProps } from '../domain/session.schema';

export class SessionMapper {
	static toDomain(data: PrismaSession): DomainSession {
		const session: SessionProps = {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
		};

		return new DomainSession(session);
	}

	static toPersistenceCreate(data: NewSession): Prisma.SessionsCreateManyInput {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			userId: data.userId,
		};
	}

	static toPersistenceUpdate(data: UpdateSession): Prisma.SessionsUpdateInput {
		const session: UpdateSessionProps = {};

		if (data.name) session.name = data.name;
		if (data.description) session.description = data.description;

		return session;
	}
}
