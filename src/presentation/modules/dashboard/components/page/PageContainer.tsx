export function PageContainer({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main className={`flex-1 flex-col gap-4 overflow-y-auto p-2 md:p-8 ${className}`}>
      {children}
    </main>
  );
}
