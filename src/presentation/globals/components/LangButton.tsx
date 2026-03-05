import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { IconLanguage } from './Icons';

export function LangButton({
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
      <IconLanguage className="size-6" strokeWidth="1.5" />
    </VariantButton>
  );
}
