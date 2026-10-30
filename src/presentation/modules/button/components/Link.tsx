import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import {
  buttonVariant,
  type ButtonVariantProps,
} from '@/presentation/modules/button/button.config';

type LinkProps = React.ComponentProps<typeof NextLink> & {
  variant: ButtonVariantProps;
};

export function Link(props: LinkProps) {
  const { children, variant, className, ...restProps } = props;

  const variantClassNames = buttonVariant(variant);
  return (
    <NextLink className={twMerge(variantClassNames, className)} {...restProps}>
      {children}
    </NextLink>
  );
}
