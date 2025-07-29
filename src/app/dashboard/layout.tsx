import { Footer } from "@/modules/dashboard/components/Footer";
import { Header } from "@/modules/dashboard/components/Header";
import { Sidebar } from "@/modules/dashboard/components/Sidebar";

export default function Layout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<>
			{modal}
			<main className="grid grid-cols-[auto_1fr] h-dvh">
				<Sidebar className="h-full" />
				<main className="flex-1 flex flex-col">
					<Header title="Hello, Angel" />
					{children}
					<Footer />
				</main>
			</main>
		</>
	);
}
