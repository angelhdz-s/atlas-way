export function Imagotype({
	className = '',
	isotypeSize = 32,
}: {
	className?: string;
	isotypeSize?: number;
}) {
	return (
		<div className={`flex tracking-tight gap-2 font-bold ${className}`}>
			<Logo className="text-primary" size={isotypeSize} />
			<span className="text-2xl ld-main-fg">AtlasWay</span>
		</div>
	);
}

export function Logo({ className = '', size = 24 }: { className?: string; size?: number }) {
	return (
		<svg viewBox="0 -0.5 22 23" height={size} width={size} className={className}>
			<path
				fillRule="evenodd"
				fill="currentColor"
				stroke="currentColor"
				strokeWidth={0.3}
				d="M14.530,20.155 L11.000,10.440 L7.470,20.155 C3.459,18.711 0.592,14.879 0.592,10.378 C0.592,4.640 5.252,-0.011 11.000,-0.011 C16.748,-0.011 21.408,4.640 21.408,10.378 C21.408,14.879 18.541,18.711 14.530,20.155 ZM11.000,2.010 C6.370,2.010 2.617,5.757 2.617,10.378 C2.617,13.370 4.191,15.995 6.556,17.474 L11.000,5.376 L15.353,17.531 C17.769,16.062 19.383,13.408 19.383,10.378 C19.383,5.757 15.630,2.010 11.000,2.010 ZM13.197,22.019 L8.817,22.019 L11.000,15.981 L13.197,22.019 Z"
			/>
		</svg>
	);
}
