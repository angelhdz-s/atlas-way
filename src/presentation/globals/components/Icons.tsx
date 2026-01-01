import { IconProps, IconTypes } from '@/modules/globals/types.d';

export const defaultIconStrokeWidth = '2';
export const defaultIconSizeClass = 'size-6';

export function DefaultIcon({
	Icon,
	className = '',
	strokeWidth = defaultIconStrokeWidth,
}: {
	Icon: IconTypes;
	className?: string;
	strokeWidth?: string;
}) {
	return <Icon className={`${defaultIconSizeClass} ${className}`} strokeWidth={strokeWidth} />;
}

function MainSvgBody({
	children,
	strokeWidth,
	className,
}: IconProps & { children: React.ReactNode }) {
	return (
		<svg
			fill="none"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={strokeWidth}
			className={className}
		>
			{children}
		</svg>
	);
}

function MainSolidSvgBody({
	children,
	className,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<svg fill="currentColor" width={24} height={24} viewBox="0 0 24 24" className={className}>
			{children}
		</svg>
	);
}

export function ArrowUp({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
		</MainSvgBody>
	);
}

export function ArrowsLeftRight({
	className = '',
	strokeWidth = defaultIconStrokeWidth,
}: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
			/>
		</MainSvgBody>
	);
}

export function Barbell({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M2 12h1" />
			<path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
			<path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
			<path d="M9 12h6" />
			<path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
			<path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
			<path d="M22 12h-1" />
		</MainSvgBody>
	);
}

export function LayoutSidebar({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M9 4l0 16" />
		</MainSvgBody>
	);
}

export function Bell({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
			<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
		</MainSvgBody>
	);
}

export function BellRinging({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
			<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
			<path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
			<path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
		</MainSvgBody>
	);
}

export function BellOff({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
			/>
		</MainSvgBody>
	);
}

export function BellZ({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
			<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
			<path d="M10 9h4l-4 4h4" />
		</MainSvgBody>
	);
}

export function BarbellOff({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M2 12h1" />
			<path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
			<path d="M6.298 6.288a1 1 0 0 0 -.298 .712v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8" />
			<path d="M9 12h3" />
			<path d="M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523 -.11 .704 -.29m.296 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4" />
			<path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" />
			<path d="M22 12h-1" />
			<path d="M3 3l18 18" />
		</MainSvgBody>
	);
}

export function CalendarWeek({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
			<path d="M16 3v4" />
			<path d="M8 3v4" />
			<path d="M4 11h16" />
			<path d="M7 14h.013" />
			<path d="M10.01 14h.005" />
			<path d="M13.01 14h.005" />
			<path d="M16.015 14h.005" />
			<path d="M13.015 17h.005" />
			<path d="M7.01 17h.005" />
			<path d="M10.01 17h.005" />
		</MainSvgBody>
	);
}

export function Circle({
	className = '',
	strokeWidth = defaultIconStrokeWidth,
	porcentage = 0,
	animation = false,
}: {
	className?: string;
	strokeWidth?: string;
	porcentage?: number;
	animation?: boolean;
}) {
	const max = 100;
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={strokeWidth}
			className={className}
			strokeDasharray={max}
			strokeDashoffset={max}
		>
			{animation && (
				<animate
					attributeName="stroke-dashoffset"
					from={max}
					to={max - porcentage * (17 / 30)}
					dur="1s"
					fill="freeze"
				/>
			)}
			<circle cx={12} cy={12} r={9} />
		</svg>
	);
}

export function CircleCheck({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M9 12l2 2l4 -4" />
		</MainSvgBody>
	);
}

export function CircleOutline({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
		</MainSvgBody>
	);
}

export function MapRoute({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
			<path d="M9 12v.01" />
			<path d="M6 13v.01" />
			<path d="M17 15l-4 -4" />
			<path d="M13 15l4 -4" />
		</MainSvgBody>
	);
}

export function Alarm({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M12 10l0 3l2 0" />
			<path d="M7 4l-2.75 2" />
			<path d="M17 4l2.75 2" />
		</MainSvgBody>
	);
}

export function Cog({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
			<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
		</MainSvgBody>
	);
}

export function DeviceDesktop({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
			<path d="M7 20h10" />
			<path d="M9 16v4" />
			<path d="M15 16v4" />
		</MainSvgBody>
	);
}

export function Edit({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
			<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
			<path d="M16 5l3 3" />
		</MainSvgBody>
	);
}

export function AlertTriangle({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 9v4" />
			<path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
			<path d="M12 16h.01" />
		</MainSvgBody>
	);
}

export function FaceHappy({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
			/>
		</MainSvgBody>
	);
}

export function Forward({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 5v14l8 -7z" />
			<path d="M14 5v14l8 -7z" />
		</MainSvgBody>
	);
}

export function Home({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
			<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
		</MainSvgBody>
	);
}

export function InformationCircle({
	className = '',
	strokeWidth = defaultIconStrokeWidth,
}: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
			<path d="M12 9h.01" />
			<path d="M11 12h1v4h1" />
		</MainSvgBody>
	);
}

export function Language({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M4 5h7" />
			<path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
			<path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
			<path d="M12 20l4 -9l4 9" />
			<path d="M19.1 18h-6.2" />
		</MainSvgBody>
	);
}

export function Heart({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
		</MainSvgBody>
	);
}

export function Moon({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
		</MainSvgBody>
	);
}

export function Dots({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</MainSvgBody>
	);
}

export function DeviceDesktopAnalytics({
	className = '',
	strokeWidth = defaultIconStrokeWidth,
}: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
			<path d="M7 20h10" />
			<path d="M9 16v4" />
			<path d="M15 16v4" />
			<path d="M9 12v-4" />
			<path d="M12 12v-1" />
			<path d="M15 12v-2" />
			<path d="M12 12v-1" />
		</MainSvgBody>
	);
}

export function Scale({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M7 20l10 0" />
			<path d="M6 6l6 -1l6 1" />
			<path d="M12 3l0 17" />
			<path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
			<path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
		</MainSvgBody>
	);
}

export function Sun({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
			<path d="M6.343 17.657l-1.414 1.414" />
			<path d="M6.343 6.343l-1.414 -1.414" />
			<path d="M17.657 6.343l1.414 -1.414" />
			<path d="M17.657 17.657l1.414 1.414" />
			<path d="M4 12h-2" />
			<path d="M12 4v-2" />
			<path d="M20 12h2" />
			<path d="M12 20v2" />
		</MainSvgBody>
	);
}

export function Trash({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M4 7l16 0" />
			<path d="M10 11l0 6" />
			<path d="M14 11l0 6" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
		</MainSvgBody>
	);
}

export function TrendingDown({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 7l6 6l4 -4l8 8" />
			<path d="M21 10l0 7l-7 0" />
		</MainSvgBody>
	);
}

export function TrendingUp({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 17l6 -6l4 4l8 -8" />
			<path d="M14 7l7 0l0 7" />
		</MainSvgBody>
	);
}

export function Trophy({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M8 21l8 0" />
			<path d="M12 17l0 4" />
			<path d="M7 4l10 0" />
			<path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
			<path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</MainSvgBody>
	);
}

export function Hammer({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
			<path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
		</MainSvgBody>
	);
}

export function XCircle({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M10 10l4 4m0 -4l-4 4" />
		</MainSvgBody>
	);
}

export function XMark({ className = '', strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</MainSvgBody>
	);
}

export function ClipboardList({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
			<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
			<path d="M9 12l.01 0" />
			<path d="M13 12l2 0" />
			<path d="M9 16l.01 0" />
			<path d="M13 16l2 0" />
		</MainSvgBody>
	);
}

export function Man({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10 16v5" />
			<path d="M14 16v5" />
			<path d="M9 9h6l-1 7h-4z" />
			<path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
			<path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
			<path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</MainSvgBody>
	);
}

export function ChartPie({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
			<path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
		</MainSvgBody>
	);
}

export function ReportAnalytics({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
			<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
			<path d="M9 17v-5" />
			<path d="M12 17v-1" />
			<path d="M15 17v-3" />
		</MainSvgBody>
	);
}

export function Flame({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
		</MainSvgBody>
	);
}

export function CirclePlus({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
			<path d="M9 12h6" />
			<path d="M12 9v6" />
		</MainSvgBody>
	);
}

export function CalendarClock({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
			<path d="M16 3v4" />
			<path d="M8 3v4" />
			<path d="M4 11h10" />
			<path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M18 16.5v1.5l.5 .5" />
		</MainSvgBody>
	);
}

export function MapPlus({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5" />
			<path d="M9 4v13" />
			<path d="M15 7v8" />
			<path d="M16 19h6" />
			<path d="M19 16v6" />
		</MainSvgBody>
	);
}

export function Search({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M21 21l-6 -6" />
		</MainSvgBody>
	);
}

export function UserIcon({ className, strokeWidth = defaultIconStrokeWidth }: IconProps) {
	return (
		<MainSvgBody strokeWidth={strokeWidth} className={className}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
			<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
		</MainSvgBody>
	);
}

/* MARK: Solid Icons */

export function SolidCircleCheck({ className = '' }: { className?: string }) {
	return (
		<MainSolidSvgBody className={className}>
			<path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
		</MainSolidSvgBody>
	);
}

export function SolidCircleX({ className = '' }: { className?: string }) {
	return (
		<MainSolidSvgBody className={className}>
			<path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
		</MainSolidSvgBody>
	);
}
