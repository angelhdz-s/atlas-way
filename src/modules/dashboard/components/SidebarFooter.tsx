import { MoreOptions } from "@/modules/globals/components/Icons";

export function SidebarFooter({
	name,
	email,
	className = "",
}: {
	name: string;
	email: string;
	className?: string;
}) {
	return (
		<footer
			className={`mx-1 mb-1 rounded-xl flex items-center p-3 bg-background/50 light:bg-light-background ${className}`}
		>
			<main className="flex flex-1 items-center gap-2">
				<figure className="size-10 rounded-full bg-blue-600"></figure>
				<header className="w- leading-[1]">
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
				className="cursor-pointer hover:bg-zinc-600/10 rounded-full p-2 transition-colors"
			>
				<MoreOptions className="size-6" />
			</button>
		</footer>
	);
}
