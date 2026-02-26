type BoxProps = {
	className?: string;
	children?: React.ReactNode;
};

export function Box({ className, children }: BoxProps) {
	return (
		<div className={`p-2 w-full bg-back rounded-lg border border-bd-muted ${className}`}>
			{children}
		</div>
	);
}
