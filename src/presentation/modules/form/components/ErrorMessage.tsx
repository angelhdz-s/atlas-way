export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="fg-cancel leading-tight font-medium">{message}</p>;
}
