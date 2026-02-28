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
      className={`flex w-96 flex-col gap-2 ${className}`}
    >
      <header className="font-funnel-display fg-strong text-2xl font-medium">
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
