import { twMerge } from 'tailwind-merge';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import type { ButtonElementProps } from '@/presentation/globals/presentation.types';
import type { VariantButtonType } from '@/presentation/modules/button/button.types';

export function Button({
  variantConfig,
  className,
  type = 'button',
  ...props
}: VariantButtonType<ButtonElementProps>) {
  const variantClassNames = buttonVariant(variantConfig);
  return <button type={type} className={twMerge(variantClassNames, className)} {...props}></button>;
}
