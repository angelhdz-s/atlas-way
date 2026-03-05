import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { IconCog, DefaultIcon } from './Icons';

export function SettingsButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <VariantButton
      type="button"
      variantConfig={{
        type: 'square',
        color: 'simple',
      }}
      className={className}
    >
      <DefaultIcon Icon={IconCog} />
    </VariantButton>
  );
}
