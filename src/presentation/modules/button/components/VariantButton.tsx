import type { ButtonElementProps } from '@/presentation/globals/components/Button';
import {
  buttonVariant,
  type ButtonVariantProps,
} from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';

type Props = ButtonElementProps & ButtonVariantProps;

export function VariantButton({
  className,
  size,
  color,
  rounded = 'default',
  ...props
}: Props) {
  const variantClassNames = buttonVariant({
    size,
    color,
    rounded,
  });
  return (
    <button
      className={twMerge(variantClassNames, className)}
      {...props}
    ></button>
  );
}
