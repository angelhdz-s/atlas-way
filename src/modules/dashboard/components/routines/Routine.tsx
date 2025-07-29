import { Edit } from "@/modules/globals/components/Icons";

export function Routine({ className = "" }: { className?: string }) {
	return (
		<article
			className={`p-4 shadow-xl shadow-black/[0.05] ld-sec-bg flex flex-col gap-2 w-fit rounded-xl ${className}`}
		>
			<header>
				<h3 className="flex gap-2 text-xl font-bold ld-main-fg">
					Routine Name
					<button
						type="button"
						className="hover:text-current/50 cursor-pointer"
					>
						<Edit className="size-5" />
					</button>
				</h3>
				<p className="text-sm">Routine Description</p>
			</header>
			<footer className="flex items-center gap-2 text-sm">
				<span>Days:</span>
				<ul className="flex gap-2 *:bg-zinc-700/50 *:light:bg-current/20 *:rounded *:px-0.5 *:transition-colors">
					<li>Mon</li>
					<li>Tue</li>
					<li>Wed</li>
					<li>Thu</li>
					<li>Fri</li>
					<li>Sat</li>
					<li>Sun</li>
				</ul>
			</footer>
		</article>
	);
}
