export function SubtleCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <article className={`bg-fill-middle rounded p-4 ${className}`}>{children}</article>;
}
