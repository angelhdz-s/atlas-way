export function PageHeader({
  className = '',
  description,
  children,
  title,
}: {
  className?: string;
  children?: React.ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <header className={`text-fg-strong flex w-full items-start pt-4 ${className}`}>
      <div className="w-full space-y-1">
        <h1 className="font-funnel-display text-2xl leading-none font-bold">{title}</h1>
        {description && <p className="text-fg-default/70 text-base font-light">{description}</p>}
      </div>
      <aside>{children}</aside>
    </header>
  );
}
