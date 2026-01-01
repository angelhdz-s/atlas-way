export function ModalForm({
	className,
	action,
	onSubmit,
	children,
	title,
}: {
	className?: string;
	action?: (payload: FormData) => void;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className={`flex flex-col gap-2 w-96 ${className}`}>
			<header className="text-2xl font-funnel-display ld-main-fg font-medium">{title}</header>
			<main className="font-light">
				<form action={action} onSubmit={onSubmit} className="flex flex-col gap-4">
					{children}
				</form>
			</main>
		</div>
	);
}
