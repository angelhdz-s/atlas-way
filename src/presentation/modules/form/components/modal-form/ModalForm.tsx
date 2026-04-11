import { FormProvider } from 'react-hook-form';
import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import { Button } from '@/presentation/modules/button/components/Button';
import {
  type ModalFormHookProps,
  useFormHook,
} from '@/presentation/modules/form/hooks/useFormHook';
import type { ZodSchema } from 'zod/v3';

export function ModalForm<T extends ZodSchema<any, any>>({
  className,
  children,
  title,
  onClose,
  config,
}: {
  className?: string;
  onClose?: () => void;
  children: React.ReactNode;
  title: string;
  config: ModalFormHookProps<T>;
}) {
  const { methods, handleSubmit } = useFormHook(config);

  return (
    <div className={`flex w-160 flex-col gap-4 ${className}`}>
      <header className="border-bd-muted flex h-10 items-center justify-between border-b p-8 text-xl">
        <h3 className="font-funnel-display fg-strong truncate text-2xl font-medium">{title}</h3>
        <aside>
          <Button
            type="button"
            variantConfig={{
              color: 'simple',
              type: 'square',
            }}
            onClick={onClose}
          >
            <IconXMark />
          </Button>
        </aside>
      </header>
      <FormProvider {...methods}>
        <main className="p-8 pt-0 font-light">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {children}
          </form>
        </main>
      </FormProvider>
    </div>
  );
}
