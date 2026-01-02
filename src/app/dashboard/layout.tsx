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
			<main className="flex-1 grid grid-cols-[auto_1fr] h-dvh">
				<Sidebar />
				<main className="flex-1 flex flex-col">
					{children}
					<Footer />
				</main>
			</main>
		</>
	);
}
