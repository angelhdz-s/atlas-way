export function Card({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<article className={`p-4 rounded-xl bg-zinc-800 ${className}`}>
			{children}
		</article>
	);
}
