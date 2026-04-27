import { twMerge } from 'tailwind-merge';
import { buttonVariant } from '@/presentation/modules/button/button.config';
import type { ButtonElementProps } from '@/presentation/globals/presentation.types';
import type { VariantButtonType } from '@/presentation/modules/button/button.types';

type Props = VariantButtonType<ButtonElementProps>;

export function Button(props: Props) {
  const { children, Icon, variantConfig, className, type, ...restProps } = props;

  const variantClassNames = buttonVariant({ ...variantConfig, disabled: props.disabled });
  return (
    <button
      type={type ?? 'button'}
      className={twMerge(variantClassNames, className)}
      {...restProps}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}
