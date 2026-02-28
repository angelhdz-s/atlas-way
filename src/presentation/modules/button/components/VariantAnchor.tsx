import type { AnchorElementProps } from '@/presentation/globals/components/Anchor';
import type { ButtonVariantProps } from '@/presentation/modules/button/config';
import { buttonVariantHelper } from '../helpers/button-variants.helper';

type Props = AnchorElementProps & ButtonVariantProps;

export function VariantAnchor({
  className,
  size,
  color,
  rounded = 'default',
  ...props
}: Props) {
  return (
    <a
      className={buttonVariantHelper(
        { size, color, rounded },
        className
      )}
      {...props}
    ></a>
  );
}
