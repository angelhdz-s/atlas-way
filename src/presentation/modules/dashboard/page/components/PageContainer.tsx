export function PageContainer({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={`ml-4 flex flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-4 ${className}`}
    >
      {children}
    </main>
  );
}
