import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  title: string;
  icon?: IconName;
  children: React.ReactNode;
  className?: string;
};
export function FormFieldSection({ icon, children, title, className }: Props) {
  return (
    <section className="space-y-2" aria-label={title}>
      <h5 className="text-fg-default border-b-bd-muted flex h-10 items-center gap-2 border-b">
        {icon && <Icon icon={icon} variant={{ size: 'lg', weight: 'thin' }} />}
        <span className="truncate text-lg font-normal">{title}</span>
      </h5>
      <fieldset className={className}>{children}</fieldset>
    </section>
  );
}
