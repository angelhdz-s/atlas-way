export function SimplePil({
	className = '',
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return <li className={`w-fit px-0.5 rounded bg-zinc-700/50 ${className}`}>{children}</li>;
}
