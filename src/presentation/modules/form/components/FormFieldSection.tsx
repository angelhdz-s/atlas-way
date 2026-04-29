import type { IconTypes } from '@/presentation/globals/presentation.types';

type Props = {
  title: string;
  Icon?: IconTypes;
  children: React.ReactNode;
  className?: string;
};
export function FormFieldSection({ Icon, children, title, className }: Props) {
  return (
    <section className="space-y-2" aria-label={title}>
      <h5 className="text-fg-default border-b-bd-muted flex h-10 items-center gap-2 border-b">
        {Icon && <Icon strokeWidth="1" />}
        <span className="truncate text-lg font-normal">{title}</span>
      </h5>
      <fieldset className={className}>{children}</fieldset>
    </section>
  );
}
