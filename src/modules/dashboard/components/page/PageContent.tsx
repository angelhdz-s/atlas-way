export function PageContent({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return <main className={`${className}`}>{children}</main>;
}
