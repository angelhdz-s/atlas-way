export function Section({
	className = '',
	children,
	title,
	description,
}: {
	className?: string;
	children: React.ReactNode;
	title?: string;
	description?: string;
}) {
	return (
		<section className={`${className}`}>
			{title && (
				<header className="mb-2">
					<h3 className="ld-main-fg text-2xl font-semibold flex items-center gap-4">
						<span className="block w-fit">{title}</span>
						<span className="block flex-1 w-full h-[2px] bg-foreground/10 mask-r-from-0 mask-r-to-150%"></span>
					</h3>
					{description && <p>{description}</p>}
				</header>
			)}
			{children}
		</section>
	);
}
