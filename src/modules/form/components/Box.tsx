type BoxProps = {
	className?: string;
	children?: React.ReactNode;
};

export function Box({ className, children }: BoxProps) {
	return (
		<div
			className={`p-2 w-full bg-background/50 rounded-lg border border-subtle/20 ${className}`}
		>
			{children}
		</div>
	);
}
