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
      <main className="flex h-dvh flex-1">
        <Sidebar />
        <main className="m-0 flex flex-1 flex-col p-0">
          {children}
          <Footer />
        </main>
      </main>
    </>
  );
}
