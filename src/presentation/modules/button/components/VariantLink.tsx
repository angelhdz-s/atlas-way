import Link from 'next/link';
import type { ComponentProps } from 'react';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import { twMerge } from 'tailwind-merge';
import type { VariantButtonType } from '../button.types';

type LinkProps = ComponentProps<typeof Link>;

export function VariantLink({ variantConfig, className, ...props }: VariantButtonType<LinkProps>) {
  const variantClassNames = buttonVariant(variantConfig);
  return <Link className={twMerge(variantClassNames, className)} {...props}></Link>;
}
