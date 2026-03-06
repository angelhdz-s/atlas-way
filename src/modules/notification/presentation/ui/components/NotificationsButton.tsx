import { IconBell, DefaultIcon } from '@/presentation/globals/components/Icons';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

export function NotificationsButton({ className = '' }: { className?: string }) {
  return (
    <VariantButton
      type="button"
      variantConfig={{
        type: 'square',
        color: 'simple',
      }}
      className={className}
    >
      <DefaultIcon Icon={IconBell} />
    </VariantButton>
  );
}
