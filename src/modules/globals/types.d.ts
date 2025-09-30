export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export interface IconProps {
	className?: string;
	strokeWidth?: string;
}

export type IconTypes = React.FC<IconProps>;

export interface SolidIconProps {
	className?: string;
}

export type SolidIconTypes = React.FC<IconProps>;

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
	id: string;
	type: ToastType;
	message: string;
	duration?: number;
}

export type ActionResponseType =
	| { success: true }
	| { success: false; message: string };
