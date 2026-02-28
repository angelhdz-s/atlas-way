import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { ButtonVariantProps } from '@/presentation/modules/button/config';
import { buttonVariantHelper } from '../helpers/button-variants.helper';

type Props = ComponentProps<typeof Link> &
  ButtonVariantProps;

export function VariantLink({
  className,
  size,
  color,
  rounded = 'default',
  ...props
}: Props) {
  return (
    <Link
      className={buttonVariantHelper(
        { size, color, rounded },
        className
      )}
      {...props}
    ></Link>
  );
}
