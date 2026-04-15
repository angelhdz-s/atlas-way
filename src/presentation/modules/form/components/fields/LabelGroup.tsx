export function LabelGroup({
  className = '',
  children,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="fg-strong font-medium whitespace-nowrap">{title}</span>
      {children}
    </div>
  );
}
