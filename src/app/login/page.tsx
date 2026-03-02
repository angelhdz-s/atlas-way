import { Footer } from '@/presentation/modules/landing/components/Footer';
import { Header } from '@/presentation/modules/landing/components/Header';
import { Login } from '@/presentation/modules/login/components/Login';

export default function LoginPage() {
  return (
    <>
      <Header />
      <Login className="mx-auto my-16 grid w-full max-w-5xl flex-1 place-items-center" />
      <Footer />
    </>
  );
}
