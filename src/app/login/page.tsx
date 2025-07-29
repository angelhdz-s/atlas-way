import { Footer } from "@/modules/landing/components/Footer";
import { Header } from "@/modules/landing/components/Header";
import { Login } from "@/modules/login/components/Login";

export default function LoginPage() {
	return (
		<>
			<Header />
			<Login className="my-16 max-w-5xl w-full mx-auto grid place-items-center flex-1" />
			<Footer />
		</>
	);
}
