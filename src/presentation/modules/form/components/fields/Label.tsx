export function Label({
  className = '',
  children,
  title,
  htmlFor,
}: {
  className?: string;
  children: React.ReactNode;
  title: string;
  htmlFor: string;
}) {
  return (
    <label htmlFor={htmlFor} className={`flex flex-col gap-2 ${className}`}>
      <span className="text-strong pl-0.5 font-medium whitespace-nowrap">{title}</span>
      {children}
    </label>
  );
}
