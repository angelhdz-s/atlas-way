import { Footer } from "@/modules/dashboard/components/Footer";
import { Header } from "@/modules/dashboard/components/Header";
import { Sidebar } from "@/modules/dashboard/components/sidebar/Sidebar";
import { SidebarProvider } from "@/modules/dashboard/components/sidebar/SidebarProvider";

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
				<SidebarProvider>
					<Sidebar className="h-full" />
					<main className="flex-1 flex flex-col">
						<Header />
						{children}
						<Footer />
					</main>
				</SidebarProvider>
			</main>
		</>
	);
}
