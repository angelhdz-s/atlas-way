export function PageContainer({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={`mx-1 flex flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-2 md:mx-4 md:p-4 ${className}`}
    >
      {children}
    </main>
  );
}
