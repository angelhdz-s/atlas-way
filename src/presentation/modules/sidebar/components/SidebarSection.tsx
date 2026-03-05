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
    <section
      className={`before:bg-front relative pt-4 pb-0 before:absolute before:top-0 before:right-0 before:left-0 before:mx-auto before:h-[2px] before:w-[80%] before:mask-x-from-80% before:mask-x-to-100% ${className}`}
    >
      <header className="mb-2 px-8 py-1">
        <h4 className="font-funnel-display fg-default text-sm font-normal tracking-[2px] uppercase">
          {name}
        </h4>
      </header>
      {children}
    </section>
  );
}
