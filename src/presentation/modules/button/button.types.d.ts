import type { NonEmptyString } from '@/shared/shared.types';
import type { IconTypes } from '@/presentation/globals/presentation.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';

export type VariantButtonType<T> = T & PossibleButtonVariantProps;

type PossibleButtonVariantProps =
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        color?: ButtonVariantProps['color'];
        type?: undefined;
      };
      className?: string;
      Icon?: never;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        color?: ButtonVariantProps['color'];
        type?: 'square';
      };
      className?: string;
      Icon?: never;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        color?: ButtonVariantProps['color'];
        type?: 'icon';
      };
      className?: string;
      Icon: IconTypes;
      children?: never;
      'aria-label': NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        color?: ButtonVariantProps['color'];
        type?: 'iconText';
      };
      className?: string;
      Icon: IconTypes;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    }
  | {
      variant?: {
        size?: ButtonVariantProps['size'];
        color?: ButtonVariantProps['color'];
        type?: 'text';
      };
      className?: string;
      Icon?: never;
      children: React.ReactNode;
      'aria-label'?: NonEmptyString<string>;
    };
