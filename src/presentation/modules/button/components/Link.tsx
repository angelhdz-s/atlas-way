import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import type { ComponentProps } from 'react';
import type { VariantButtonType } from '@/presentation/modules/button/button.types';

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
