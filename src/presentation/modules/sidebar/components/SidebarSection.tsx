export function SidebarSection({
  className = '',
  children,
  name,
}: {
  className?: string;
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section className={`relative ${className}`}>
      <header className="mb-2 hidden px-4 lg:block">
        <h4 className="fg-muted text-sm font-light tracking-widest uppercase">{name}</h4>
      </header>
      {children}
    </section>
  );
}
