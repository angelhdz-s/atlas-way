import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions, User as NextAuthUser } from 'next-auth';
import { getContainer } from '@/di/containers';
import { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	events: {
		async signIn({ user }: { user: NextAuthUser }) {
			if (!user.email || !user.name) return;

			const containers = getContainer();

			const registerUser = containers.user.CreateIfNotExistsUserUseCase;

			const newUser: CreateUserInput = {
				email: user.email,
				name: user.name,
				roleId: 'base',
			};

			await registerUser.execute(newUser);
		},
	},
};
