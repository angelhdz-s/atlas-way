import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';

export type VariantButtonType<T> = {
  variantConfig?: ButtonVariantProps;
  className?: string;
} & T;
