export function Label({
	className = "",
	children,
	title,
}: {
	className?: string;
	children: React.ReactNode;
	title: string;
}) {
	return (
		<label className={`flex flex-col gap-1 ${className}`}>
			<span className="whitespace-nowrap">{title}</span>
			{children}
		</label>
	);
}
