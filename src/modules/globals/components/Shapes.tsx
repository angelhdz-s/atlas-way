export function Shape01({
	className = "",
	color1 = "currentColor",
	color2 = "currentColor",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_105_560)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z"
					fill="url(#paint0_linear_105_560)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_105_560"
					x1="20.5"
					y1="16"
					x2="100"
					y2="200"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor={color1} />
					<stop offset="1" stopColor={color2} />
				</linearGradient>
				<clipPath id="clip0_105_560">
					<rect width="200" height="200" fill="none" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape02({
	className = "",
	color1 = "currentColor",
	color2 = "currentColor",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_238_1296)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
					fill="url(#paint0_linear_238_1296)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_238_1296"
					x1="20.5"
					y1="16"
					x2="100"
					y2="200"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor={color1} />
					<stop offset="1" stopColor={color2} />
				</linearGradient>
				<clipPath id="clip0_238_1296">
					<rect width="200" height="200" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape03({
	className = "",
	color1 = "currentColor",
	color2 = "currentColor",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_238_1313)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
					fill="url(#paint0_linear_238_1313)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_238_1313"
					x1="14"
					y1="26"
					x2="179"
					y2="179.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor={color1} />
					<stop offset="1" stopColor={color2} />
				</linearGradient>
				<clipPath id="clip0_238_1313">
					<rect width="200" height="200" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
