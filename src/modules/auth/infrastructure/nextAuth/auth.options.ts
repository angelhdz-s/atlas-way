import { CreateIfNotExistsUserUseCase } from '@/modules/user/application/create-if-not-exists-user.usecase';
import { NewUser } from '@/modules/user/domain/user.entity';
import { UserPrismaRepository } from '@/modules/user/infrastructure/user.prisma.repository';
import GoogleProvider from 'next-auth/providers/google';
import { User } from 'next-auth';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	events: {
		async signIn({ user }: { user: User }) {
			if (!user.email || !user.name) return;

			const userRepo = new UserPrismaRepository();
			const registerUser = new CreateIfNotExistsUserUseCase(userRepo);

			const domainUser = new NewUser({
				email: user.email,
				name: user.name,
			});

			await registerUser.execute(domainUser);
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};
