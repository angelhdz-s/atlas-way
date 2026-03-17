import type { ButtonElementProps } from '@/presentation/globals/components/Button';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';
import type { VariantButtonType } from '../button.types';

export function VariantButton({
  variantConfig,
  className,
  type = 'button',
  ...props
}: VariantButtonType<ButtonElementProps>) {
  const variantClassNames = buttonVariant(variantConfig);
  return <button type={type} className={twMerge(variantClassNames, className)} {...props}></button>;
}
