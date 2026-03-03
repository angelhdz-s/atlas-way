import type { AnchorElementProps } from '@/presentation/globals/components/Anchor';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';
import type { VariantButtonType } from '../button.types';

export function VariantAnchor({
  className,
  variantConfig,
  ...props
}: VariantButtonType<AnchorElementProps>) {
  const variantClassNames = buttonVariant(variantConfig);
  return (
    <a
      className={twMerge(variantClassNames, className)}
      {...props}
    ></a>
  );
}
