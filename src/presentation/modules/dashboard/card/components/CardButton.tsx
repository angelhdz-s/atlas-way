import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

export function CardButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VariantButton
      type="button"
      color="subtle"
      size="md"
      className="ml-auto flex items-center gap-1"
    >
      {children}
    </VariantButton>
  );
}
