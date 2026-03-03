import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { IconCog, DefaultIcon } from './Icons';

export function SettingsButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <VariantButton
      color="simple"
      type="square"
      className={className}
    >
      <DefaultIcon Icon={IconCog} />
    </VariantButton>
  );
}
