import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import type { VariantButtonType } from '@/presentation/modules/button/button.types';

type LinkProps = React.ComponentProps<typeof NextLink>;

export function Link(props: VariantButtonType<LinkProps>) {
  const { children, Icon, variantConfig, className, ...restProps } = props;

  const variantClassNames = buttonVariant(variantConfig);
  return (
    <NextLink className={twMerge(variantClassNames, className)} {...restProps}>
      {Icon && <Icon />}
      {children}
    </NextLink>
  );
}
