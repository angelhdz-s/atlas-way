export function Section({
  className = '',
  children,
  title,
  description,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <section className={`${className}`}>
      {title && (
        <header className="mb-2">
          <h3 className="fg-strong flex items-center gap-4 text-2xl font-semibold">
            <span className="block w-fit">{title}</span>
            <span className="bg-front block h-[2px] w-full flex-1 mask-r-from-0 mask-r-to-150%"></span>
          </h3>
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
