import { Session as NextAuthSession } from 'next-auth';
import { AuthSession } from '../domain/errors/auth-session.types';

export class AuthMapper {
	static toDomain(data: NextAuthSession): AuthSession {
		return {
			email: data.user?.email as string,
			avatar: data.user?.image as string,
		};
	}
}
