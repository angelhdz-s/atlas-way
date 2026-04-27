import type { IconTypes } from '@/presentation/globals/presentation.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import type { NonEmptyString } from '@/shared/shared.types';

export type VariantButtonType<T> = T & PossibleButtonVariantProps;

type PossibleButtonVariantProps =
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        size?: ButtonVariantProps['color'];
        type?: undefined;
      };
      variantConfig?: ButtonVariantProps;
      className?: string;
      Icon?: never;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        size?: ButtonVariantProps['color'];
        type?: 'icon';
      };
      variantConfig?: ButtonVariantProps;
      className?: string;
      Icon: IconTypes;
      children?: never;
      'aria-label': NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        size?: ButtonVariantProps['color'];
        type?: 'iconText';
      };
      variantConfig?: ButtonVariantProps;
      className?: string;
      Icon: IconTypes;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        size?: ButtonVariantProps['color'];
        type?: 'text';
      };
      variantConfig?: ButtonVariantProps;
      className?: string;
      Icon?: never;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    };
