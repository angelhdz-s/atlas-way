export function PageHeader({
	className = "",
	children,
	title,
}: {
	className?: string;
	children?: React.ReactNode;
	title: string;
}) {
	return (
		<header className={`ld-main-fg h-18 mb-8 flex items-center ${className}`}>
			<h1 className="ld-main-fg-gradient text-5xl p-1 leading-[1] font-light tracking-tighter font-funnel-display">
				{title}
			</h1>
			{children}
		</header>
	);
}
