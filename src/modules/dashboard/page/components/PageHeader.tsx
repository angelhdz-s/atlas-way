export function PageHeader({
	className = "",
	description,
	children,
	title,
}: {
	className?: string;
	children?: React.ReactNode;
	description?: string;
	title: string;
}) {
	return (
		<header className={`w-full ld-main-fg ${className}`}>
			<main className="w-full flex items-center gap-2">
				<h1 className="flex-1 ld-main-fg-gradient text-4xl leading-[1] font-bold tracking-tight font-funnel-display pb-1">
					{title}
				</h1>
				<aside>{children}</aside>
			</main>
			{description && (
				<footer>
					<p className="font-light text-lg text-foreground/70">{description}</p>
				</footer>
			)}
		</header>
	);
}
