import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { IconLanguage } from './Icons';

export function LangButton({
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
      <IconLanguage className="size-6" strokeWidth="1.5" />
    </VariantButton>
  );
}
