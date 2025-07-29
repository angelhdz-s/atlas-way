import { Footer } from "@/modules/landing/components/Footer";
import { Header } from "@/modules/landing/components/Header";
import { SignUp } from "@/modules/login/components/SignUp";

export default function SignUpPage() {
	return (
		<>
			<Header />
			<SignUp className="my-16 max-w-5xl w-full mx-auto grid place-items-center flex-1" />
			<Footer />
		</>
	);
}
