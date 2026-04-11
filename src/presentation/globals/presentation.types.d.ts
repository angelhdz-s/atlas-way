export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export interface IconProps {
  className?: string;
  strokeWidth?: string;
  ariaHidden?: boolean;
}

export interface SIconProps {
  className?: string;
  ariaHidden?: boolean;
}

export type IconTypes = React.FC<IconProps> | React.FC<SIconProps>;

export interface SolidIconProps {
  className?: string;
}

export type SolidIconTypes = React.FC<IconProps>;

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

export type ActionResponseType = {
  success: boolean;
  message: string;
};

export type AtomicElement = 'div' | 'span' | 'button' | 'li' | 'a';

export type DivProps = React.ComponentPropsWithRef<'div'>;

export type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type AnchorElementProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
