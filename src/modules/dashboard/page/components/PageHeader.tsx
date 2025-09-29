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
		<header className={`ld-main-fg ${className}`}>
			<main className="flex items-center gap-1">
				<h1 className="ld-main-fg-gradient text-4xl leading-[1] font-light tracking-tighter font-funnel-display pb-1">
					{title}
				</h1>
				{children}
			</main>
			{description && (
				<footer>
					<p className="font-light text-lg text-foreground/70">{description}</p>
				</footer>
			)}
		</header>
	);
}
