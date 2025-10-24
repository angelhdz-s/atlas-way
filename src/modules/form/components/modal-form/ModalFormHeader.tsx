type ModalFormProps = {
	title: string;
	className?: string;
};
export function ModalFormHeader({ title, className = '' }: ModalFormProps) {
	return (
		<header className={`font-funnel-display ld-main-fg font-medium text-2xl ${className}`}>
			{title}
		</header>
	);
}
