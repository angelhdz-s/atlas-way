import { twMerge } from 'tailwind-merge';
import type { ButtonElementProps } from '@/presentation/globals/presentation.types';
import {
  buttonVariant,
  type ButtonVariantProps,
} from '@/presentation/modules/button/button.config';

type Props = ButtonElementProps & {
  variant: ButtonVariantProps;
};

export function Button(props: Props) {
  const { children, variant, className, type, ...restProps } = props;

  const variantClassNames = buttonVariant({ ...variant, disabled: props.disabled });
  return (
    <button
      type={type ?? 'button'}
      className={twMerge(variantClassNames, className)}
      {...restProps}
    >
      {children}
    </button>
  );
}
