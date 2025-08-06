import { MoreOptions } from "@/modules/globals/components/Icons";
import { useSidebar } from "../../hooks/useSidebar";

export function SidebarFooter({
	name,
	email,
	className = "",
}: {
	name: string;
	email: string;
	className?: string;
}) {
	const { isOpen } = useSidebar();
	return (
		<footer
			className={`flex items-center bg-background/50 light:bg-light-background ${className} ${isOpen ? "mx-1 mb-1 rounded p-3" : "w-full justify-center"}`}
		>
			<main
				className={`flex flex-1 items-center ${isOpen ? "gap-2" : "justify-center py-2"}`}
			>
				<figure className="size-10 rounded-full bg-blue-600"></figure>
				<header className={`leading-[1] ${isOpen ? "" : "hidden"}`}>
					<h4 className="h-5 -mb-1 font-medium overflow-hidden whitespace-nowrap text-ellipsis ld-main-fg">
						{name}
					</h4>
					<p className="text-sm overflow-y-clip overflow-hidden whitespace-nowrap text-ellipsis">
						{email}
					</p>
				</header>
			</main>
			<button
				type="button"
				className={`cursor-pointer hover:bg-zinc-600/10 rounded-full p-2 transition-colors ${isOpen ? "" : "hidden"}`}
			>
				<MoreOptions className="size-6" />
			</button>
		</footer>
	);
}
