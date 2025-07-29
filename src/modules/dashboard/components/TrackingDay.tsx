import { Check, Edit } from "@/modules/globals/components/Icons";

export function TrackingDay({
	className = "",
	title,
}: {
	className?: string;
	title: string;
}) {
	return (
		<article
			className={`relative w-full h-48 rounded-none flex flex-col overflow-hidden group ${className} outline-1 -outline-offset-1 outline-transparent hover:outline-zinc-900 transition-colors`}
		>
			<header className="flex items-center justify-between bg-zinc-900/80 px-2 h-8 text-sm group-hover:ld-main-fg transition-colors">
				{title}
				<aside className="flex items-center gap-1">
					<button type="button" className=" h-full cursor-pointer">
						<Edit className="size-5" strokeWidth="1.8" />
					</button>
					<button type="button" className=" h-full cursor-pointer">
						<Check className="size-5" strokeWidth="1.8" />
					</button>
				</aside>
			</header>
			<main className="relative flex-1 -outline-offset-1 outline-1 outline-zinc-900">
				<div className="absolute mask-radial-at-top mask-radial-[50%_50%] mask-radial-from-0% mask-radial-to-250% inset-0 transition-opacity opacity-[0.05] group-hover:opacity-[0.15] bg-[url('/backgrounds/grid.svg')] [background-size:50px]"></div>
			</main>
		</article>
	);
}
