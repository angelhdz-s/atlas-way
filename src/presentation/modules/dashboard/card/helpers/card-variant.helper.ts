import { twMerge } from 'tailwind-merge';
import {
  cardClassesConfig,
  type CardVariantProps,
} from '../config';

export function cardVariantHelper(
  variantProps: CardVariantProps,
  className?: string
) {
  const cardVariant = cardClassesConfig(variantProps);
  return twMerge(cardVariant, className);
}
