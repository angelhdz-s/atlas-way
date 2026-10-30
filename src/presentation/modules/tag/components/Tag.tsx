import { tagVariant, type TagVariant } from '@/presentation/modules/tag/config/tag.config.variants';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  children: React.ReactNode;
  variant?: TagVariant;
};

export function Tag({ className, children, variant }: Props) {
  const variantClass = tagVariant(variant);

  const role = variant?.color === 'default' ? undefined : 'status';

  return (
    <div role={role} className={twMerge(variantClass, className)}>
      {children}
    </div>
  );
}
