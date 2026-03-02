export function CardTitle({
  className = '',
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <h3
      className={`font-funnel-display fg-strong text-xl font-light tracking-tight ${className}`}
    >
      {title}
    </h3>
  );
}
