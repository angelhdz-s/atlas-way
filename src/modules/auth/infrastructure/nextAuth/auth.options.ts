import GoogleProvider from 'next-auth/providers/google';
import { User as NextAuthUser } from 'next-auth';
import { Containers } from '@/di/containers';
import { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	events: {
		async signIn({ user }: { user: NextAuthUser }) {
			if (!user.email || !user.name) return;

			const registerUser = Containers.User.CreateIfNotExistsUserUseCase;

			const newUser: CreateUserInput = {
				email: user.email,
				name: user.name,
				roleId: 'base',
			};

			await registerUser.execute(newUser);
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};
