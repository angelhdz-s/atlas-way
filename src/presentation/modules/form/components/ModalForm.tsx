export function ModalForm({
  className,
  action,
  onSubmit,
  children,
  title,
}: {
  className?: string;
  action?: (payload: FormData) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`flex w-100 flex-col gap-4 ${className}`}
    >
      <header className="font-funnel-display fg-strong text-center text-3xl font-medium">
        {title}
      </header>
      <main className="font-light">
        <form
          action={action}
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          {children}
        </form>
      </main>
    </div>
  );
}
