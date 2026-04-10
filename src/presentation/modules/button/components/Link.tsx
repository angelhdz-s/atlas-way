import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';
import type { VariantButtonType } from '../button.types';

type LinkProps = ComponentProps<typeof NextLink>;

export function Link({ variantConfig, className, ...props }: VariantButtonType<LinkProps>) {
  const { children, ...rest } = props;
  const variantClassNames = buttonVariant(variantConfig);
  return (
    <NextLink className={twMerge(variantClassNames, className)} {...rest}>
      {children}
    </NextLink>
  );
}
