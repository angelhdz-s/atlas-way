export function CardHeader({
  title,
  children,
  decoration,
}: {
  title: string;
  children?: React.ReactNode;
  decoration?: React.ReactNode;
}) {
  return (
    <header>
      <main className="flex items-center justify-between gap-2">
        <h2 className="font-funnel-display fg-strong overflow-hidden pr-1 pb-1 text-3xl font-medium tracking-tight text-ellipsis whitespace-nowrap">
          {title}
        </h2>
        {decoration}
      </main>
      {children}
    </header>
  );
}
