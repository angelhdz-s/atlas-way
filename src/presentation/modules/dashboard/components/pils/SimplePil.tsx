export function SimplePil({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={`w-fit rounded bg-zinc-700/50 px-0.5 ${className}`}
    >
      {children}
    </li>
  );
}
