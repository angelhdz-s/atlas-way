export function ErrorMessage({ message }: { message?: string }) {
	if (!message) return null;
	return <p className="fg-cancel font-medium leading-tight">{message}</p>;
}
