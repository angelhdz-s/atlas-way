export function CardTitle({ className = '', title }: { className?: string; title: string }) {
	return (
		<h3
			className={`font-funnel-display font-light tracking-tight 
			text-xl fg-strong ${className}`}
		>
			{title}
		</h3>
	);
}
