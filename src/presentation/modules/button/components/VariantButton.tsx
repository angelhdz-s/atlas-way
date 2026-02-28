import type { ButtonElementProps } from '@/presentation/globals/components/Button';
import type { ButtonVariantProps } from '@/presentation/modules/button/config';
import { buttonVariantHelper } from '../helpers/button-variants.helper';

type Props = ButtonElementProps & ButtonVariantProps;

export function VariantButton({
  className,
  size,
  color,
  rounded = 'default',
  ...props
}: Props) {
  return (
    <button
      className={buttonVariantHelper(
        { size, color, rounded },
        className
      )}
      {...props}
    ></button>
  );
}
