import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function CardButton({ children, className }: Props) {
  return (
    <VariantButton
      type="button"
      variantConfig={{
        color: 'simple',
      }}
      className={twMerge('ml-auto flex items-center gap-1', className)}
    >
      {children}
    </VariantButton>
  );
}
