import { Trash } from "@/modules/globals/components/Icons";

export function Notification({
	className = "",
	title,
	description,
	date,
	notSeen = false,
}: {
	className?: string;
	title: string;
	description: string;
	date: string;
	notSeen?: boolean;
}) {
	return (
		<article
			className={`cursor-pointer px-4 py-1 border-1 border-foreground/10 hover:border-foreground/50 rounded ${notSeen ? "ld-sec-bg" : ""} ${className}`}
		>
			<main className="flex items-center gap-4">
				<div className="grid place-content-center my-auto">
					<input type="checkbox" className="size-5" />
				</div>
				<main className="flex-1 flex flex-col gap-0">
					<header className="flex items-center gap-4">
						<h3
							className={`text-base ${notSeen ? "ld-main-fg font-bold" : ""}`}
						>
							{title}
						</h3>
						{notSeen && (
							<span className="block size-2.5 rounded-full bg-blue-500"></span>
						)}
					</header>
					<footer>
						<p className={`text-sm ${notSeen ? "" : "text-foreground/60"}`}>
							{description}
						</p>
					</footer>
				</main>
				<aside className="w-12 text-center text-foreground/50 text-sm">
					{date}
				</aside>
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="bg-foreground/10 text-sm text-red-600 cursor-pointer p-2 rounded"
					>
						<Trash className="size-4" strokeWidth="2" />
					</button>
				</div>
			</main>
		</article>
	);
}
