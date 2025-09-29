export function PageContainer({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<main
			className={`flex flex-col gap-4 flex-1 p-4 overflow-x-hidden overflow-y-auto ml-4 ${className}`}
		>
			{children}
		</main>
	);
}
