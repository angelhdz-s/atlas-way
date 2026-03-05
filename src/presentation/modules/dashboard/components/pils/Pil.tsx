export function Pil({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={`rounded border border-zinc-700 bg-zinc-700/50 px-2 py-1 ${className}`}
    >
      {children}
    </li>
  );
}
