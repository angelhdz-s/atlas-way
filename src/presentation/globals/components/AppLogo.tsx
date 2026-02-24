export function Imagotype({
	className = '',
	isotypeSize = 32,
}: {
	className?: string;
	isotypeSize?: number;
}) {
	return (
		<div className={`flex tracking-tight gap-2 font-bold ${className}`}>
			<Logo size={isotypeSize} />
			<span className="hidden md:block font-funnel-display text-2xl ld-main-fg">
				AtlasWay
			</span>
		</div>
	);
}

export function Logo({ className = '', size = 24 }: { className?: string; size?: number }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
			<defs>
				<linearGradient
					gradientUnits="userSpaceOnUse"
					x1="634.086"
					y1="-169.437"
					x2="634.086"
					y2="342.562"
					id="gradient-1"
					gradientTransform="matrix(0.726953, -0.686688, 0.502096, 0.531537, 100.137672, 583.134792)"
				>
					<stop offset="0" stopColor="rgb(6, 6, 6)" />
					<stop offset="1" stopColor="rgb(9, 9, 9)" />
				</linearGradient>
				<linearGradient
					gradientUnits="userSpaceOnUse"
					x1="589.791"
					y1="9.13"
					x2="589.791"
					y2="318.052"
					id="gradient-0"
					gradientTransform="matrix(0.752929, -0.425792, 0.428785, 0.758221, 66.491451, 302.938738)"
				>
					<stop offset="0" stopColor="rgb(238, 15, 15)" />
					<stop offset="1" stopColor="rgb(119, 1, 1)" />
				</linearGradient>
			</defs>
			<g transform="matrix(1, 0, 0, 1, -333.7909851074219, 77.03350067138672)">
				<path
					fillRule="evenodd"
					d="M 419.5 -77.033 L 759.468 -77.033 C 807.281 -77.033 845.791 -38.52 845.791 8.676 L 845.791 348.643 C 845.791 396.453 807.281 434.966 759.468 434.966 L 419.5 434.966 C 372.304 434.966 333.791 396.453 333.791 348.643 L 333.791 8.676 C 333.791 -38.52 372.304 -77.033 419.5 -77.033 Z"
					strokeWidth="1"
					paintOrder="fill"
					fill='url("#gradient-1")'
				/>
				<g transform="matrix(1, 0, 0, 1, 4.029984, -9.919883)">
					<path
						fillRule="evenodd"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeWidth="50px"
						fill="none"
						d="M 660.4 300.944 L 585.513 177.794 L 511.121 300.944 C 469.528 275.693 441.741 229.961 441.741 177.751 C 441.741 98.207 506.221 33.731 585.513 33.731 C 665.301 33.731 729.781 98.207 729.781 177.751 C 729.781 229.961 701.995 275.693 660.4 300.944 Z"
						stroke='url("#gradient-0")'
					/>
					<path
						fillRule="evenodd"
						fill="rgb(238, 15, 15)"
						d="M 585.761 284.41 L 636.809 368.642 L 534.713 368.642 L 585.761 284.41 Z"
						strokeWidth="1"
					/>
				</g>
			</g>
		</svg>
	);
}
