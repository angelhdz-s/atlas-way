export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-danger leading-tight font-medium">{message}</p>;
}
