export function ModalForm({
	className,
	action,
	children,
	title,
}: {
	className?: string;
	action: (payload: FormData) => void;
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className={`w-96 ${className}`}>
			<header className="text-2xl mb-4 font-funnel-display ld-main-fg">
				{title}
			</header>
			<main className="font-light">
				<form action={action} className="flex flex-col gap-2">
					{children}
				</form>
			</main>
		</div>
	);
}
