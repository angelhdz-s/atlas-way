import { twMerge } from 'tailwind-merge';
import {
  buttonClassConfig,
  type ButtonVariantProps,
} from '../button.config';

export function buttonVariantHelper(
  variantProps: ButtonVariantProps,
  className?: string
) {
  const variantClass = buttonClassConfig(variantProps);
  return twMerge(variantClass, className);
}
