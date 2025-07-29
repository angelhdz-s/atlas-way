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
		<header
			className={`ld-main-fg h-16 text-4xl font-bold mb-8 font-funnel-display flex items-center ${className}`}
		>
			<h1 className="ld-main-fg-gradient">{title}</h1>
			{children}
		</header>
	);
}
