export function SubtleCard({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return <article className={`rounded bg-subtle/5 p-4 ${className}`}>{children}</article>;
}
