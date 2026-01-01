export function ErrorMessage({ message }: { message?: string }) {
	if (!message) return null;
	return <p className="text-cancel font-medium leading-tight">{message}</p>;
}
