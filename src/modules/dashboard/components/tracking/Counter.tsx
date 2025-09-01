export function Counter({
	className,
	number,
}: {
	className?: string;
	number: number;
}) {
	return (
		<span
			className={`font-funnel-display text-4xl font-medium p-0.5 text-transparent leading-[1] bg-clip-text bg-gradient-to-t from-primary to-accent ${className}`}
		>
			{number}
		</span>
	);
}
