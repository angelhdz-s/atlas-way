import { Footer } from '@/presentation/modules/dashboard/components/Footer';
import { Header } from '@/presentation/modules/dashboard/components/Header';
import { Sidebar } from '@/presentation/modules/sidebar/components/Sidebar';

export default async function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      <Header />
      <main className="grid h-dvh flex-1 grid-cols-[auto_1fr]">
        <Sidebar />
        <main className="flex flex-1 flex-col">
          {children}
          <Footer />
        </main>
      </main>
    </>
  );
}
