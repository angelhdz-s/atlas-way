import type { ButtonVariantProps } from './button.config';

export type VariantButtonType<T> = {
  variantConfig?: ButtonVariantProps;
  className?: string;
} & T;
