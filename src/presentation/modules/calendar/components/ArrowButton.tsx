export function ArrowButton({
	className = '',
	children,
	onClick,
}: {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`grid place-content-center cursor-pointer aspect-square h-full border border-bd-default hover:fg-strong hover:border-subtle/80 transition-colors ${className}`}
		>
			{children}
		</button>
	);
}
