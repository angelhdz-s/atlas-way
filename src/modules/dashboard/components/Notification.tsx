export function Notification({
	className = "",
	title,
	description,
}: {
	className?: string;
	title: string;
	description: string;
}) {
	return (
		<article
			className={`bg-zinc-900/50 px-4 py-2 border-1 border-zinc-900 rounded ${className}`}
		>
			<main className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
				<div className="grid place-content-center my-auto">
					<input type="checkbox" className="size-5" />
				</div>
				<main>
					<h3>
						{title}{" "}
						<span className="text-foreground/50 text-sm ml-2">
							3 minutes ago
						</span>
					</h3>
					<p className="text-sm text-gray-500">{description}</p>
				</main>
				<aside className="flex items-center gap-2 justify-end my-auto *:cursor-pointer *:px-4 *:py-2 *:border-1 *:border-zinc-900 *:rounded-xl">
					<button type="button" className="text-sm text-blue-500">
						Check
					</button>
					<button type="button" className="text-sm text-red-600">
						Delete
					</button>
				</aside>
			</main>
		</article>
	);
}
