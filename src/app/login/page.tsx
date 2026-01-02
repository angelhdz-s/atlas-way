import { Footer } from '@/presentation/modules/landing/components/Footer';
import { Header } from '@/presentation/modules/landing/components/Header';
import { Login } from '@/presentation/modules/login/components/Login';

export default function LoginPage() {
	return (
		<>
			<Header />
			<Login className="my-16 max-w-5xl w-full mx-auto grid place-items-center flex-1" />
			<Footer />
		</>
	);
}
