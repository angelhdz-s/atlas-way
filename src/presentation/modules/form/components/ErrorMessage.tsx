type Props = { message?: string | undefined };

export function ErrorMessage({ message }: Props) {
  if (!message) return null;
  return <p className="text-danger leading-tight font-medium">{message}</p>;
}
