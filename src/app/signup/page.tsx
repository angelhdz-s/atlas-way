import { Footer } from '@/presentation/modules/landing/components/Footer';
import { Header } from '@/presentation/modules/landing/components/Header';
import { SignUp } from '@/presentation/modules/login/components/SignUp';

export default function SignUpPage() {
  return (
    <>
      <Header />
      <SignUp className="mx-auto my-16 grid w-full max-w-5xl flex-1 place-items-center" />
      <Footer />
    </>
  );
}
