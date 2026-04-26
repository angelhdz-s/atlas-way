export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-cancel leading-tight font-medium">{message}</p>;
}
