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
    <header className={`fg-strong min-h-20 w-full py-4 ${className}`}>
      <main className="flex w-full items-center gap-2">
        <h1 className="font-funnel-display flex-1 pb-1 text-4xl leading-none font-bold tracking-tight">
          {title}
        </h1>
        <aside>{children}</aside>
      </main>
      {description && (
        <footer>
          <p className="text-default/70 text-lg font-light">{description}</p>
        </footer>
      )}
    </header>
  );
}
