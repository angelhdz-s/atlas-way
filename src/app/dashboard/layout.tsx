import { Footer } from "@/modules/dashboard/components/Footer";
import { Header } from "@/modules/dashboard/components/Header";
import { Sidebar } from "@/modules/sidebar/components/Sidebar";
import { SidebarProvider } from "@/modules/sidebar/components/SidebarProvider";
import { getUser } from "@/actions/users";

export default async function Layout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	const user = await getUser();
	return (
		<>
			{modal}
			<SidebarProvider>
				<Header user={user ?? undefined} />
				<main className="flex-1 grid grid-cols-[auto_1fr] h-dvh">
					<Sidebar user={user ?? undefined} />
					<main className="flex-1 flex flex-col">
						{children}
						<Footer />
					</main>
				</main>
			</SidebarProvider>
		</>
	);
}
