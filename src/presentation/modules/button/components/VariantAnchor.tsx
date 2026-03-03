import type { AnchorElementProps } from '@/presentation/globals/components/Anchor';
import {
  buttonVariant,
  type ButtonVariantProps,
} from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';

type Props = AnchorElementProps & ButtonVariantProps;

export function VariantAnchor({
  className,
  size,
  color,
  type,
  ...props
}: Props) {
  const variantClassNames = buttonVariant({
    size,
    color,
    type,
  });
  return (
    <a
      className={twMerge(variantClassNames, className)}
      {...props}
    ></a>
  );
}
