export function SubtleCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`bg-subtle/5 rounded p-4 ${className}`}
    >
      {children}
    </article>
  );
}
