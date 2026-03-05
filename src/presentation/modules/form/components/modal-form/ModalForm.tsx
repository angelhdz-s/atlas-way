import { IconXMark } from '@/presentation/globals/components/Icons';
import { VariantButton } from '../../../button/components/VariantButton';

export function ModalForm({
  className,
  action,
  onSubmit,
  children,
  title,
  onClose,
}: {
  className?: string;
  action?: (payload: FormData) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`flex w-160 flex-col gap-4 ${className}`}
    >
      <header className="border-bd-muted flex h-10 items-center justify-between border-b p-8 text-xl">
        <h3 className="font-funnel-display fg-strong truncate text-2xl font-medium">
          {title}
        </h3>
        <aside>
          <VariantButton
            type="button"
            variantConfig={{
              color: 'simple',
              type: 'square',
            }}
            onClick={onClose}
          >
            <IconXMark />
          </VariantButton>
        </aside>
      </header>
      <main className="p-8 pt-0 font-light">
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
