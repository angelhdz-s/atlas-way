export function Pil({
	className = '',
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<li className={`py-1 px-2 rounded bg-zinc-700/50 border border-zinc-700 ${className}`}>
			{children}
		</li>
	);
}
