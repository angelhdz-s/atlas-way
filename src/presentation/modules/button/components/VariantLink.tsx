import Link from 'next/link';
import type { ComponentProps } from 'react';
import {
  buttonVariant,
  type ButtonVariantProps,
} from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<typeof Link> &
  ButtonVariantProps;

export function VariantLink({
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
    <Link
      className={twMerge(variantClassNames, className)}
      {...props}
    ></Link>
  );
}
