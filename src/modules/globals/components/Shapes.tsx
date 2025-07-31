"use client";

import { useId } from "react";

export function Shape01({
	className = "",
	color1 = "",
	color2 = "",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	const clipPathId = useId();
	const gradientId = useId();
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath={`url(#${clipPathId})`}>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z"
					fill={`url(#${gradientId})`}
				/>
			</g>
			<defs>
				<linearGradient
					id={gradientId}
					x1="20.5"
					y1="16"
					x2="100"
					y2="200"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" className={color1} />
					<stop offset="1" stopColor="currentColor" className={color2} />
				</linearGradient>
				<clipPath id={clipPathId}>
					<rect width="200" height="200" fill="none" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape02({
	className = "",
	color1 = "",
	color2 = "",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	const clipPathId = useId();
	const gradientId = useId();
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath={`url(#${clipPathId})`}>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
					fill={`url(#${gradientId})`}
				/>
			</g>
			<defs>
				<linearGradient
					id={gradientId}
					x1="20.5"
					y1="16"
					x2="100"
					y2="200"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" className={color1} />
					<stop offset="1" stopColor="currentColor" className={color2} />
				</linearGradient>
				<clipPath id={clipPathId}>
					<rect width="200" height="200" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape03({
	className = "",
	color1 = "",
	color2 = "",
}: {
	className?: string;
	color1?: string;
	color2?: string;
}) {
	const clipPathId = useId();
	const gradientId = useId();
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			fill="none"
			className={className}
		>
			<g clipPath={`url(#${clipPathId})`}>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
					fill={`url(#${gradientId})`}
				/>
			</g>
			<defs>
				<linearGradient
					id={gradientId}
					x1="14"
					y1="26"
					x2="179"
					y2="179.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" className={color1} />
					<stop offset="1" stopColor="currentColor" className={color2} />
				</linearGradient>
				<clipPath id={clipPathId}>
					<rect width="200" height="200" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape04({
	className = "",
	color1 = "",
	color2 = "",
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
			<g clipPath="url(#clip0_105_723)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M117.333 100L200 183H5.45799e-05L82.6668 100L2.28882e-05 17L200 17L117.333 100Z"
					fill="url(#paint0_linear_105_723)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_105_723"
					x1="100"
					y1="17"
					x2="100"
					y2="183"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" className={color1} />
					<stop offset="1" stopColor="currentColor" className={color2} />
				</linearGradient>
				<clipPath id="clip0_105_723">
					<rect width="200" height="200" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Shape05({
	strokeWidth = "5",
	strokeDasharray = 0,
	className = "",
	color1 = "",
	color2 = "",
}: {
	strokeWidth?: string;
	strokeDasharray?: number;
	className?: string;
	color1?: string;
	color2?: string;
}) {
	const gradientId = useId();
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 800 800"
			className={className}
			strokeWidth={strokeWidth}
			offset={"60"}
			strokeDashoffset={strokeDasharray}
		>
			<defs>
				<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
					<stop
						stopColor="currentColor"
						className={color1}
						stopOpacity="1"
						offset="0%"
					></stop>
					<stop
						stopColor="currentColor"
						className={color2}
						stopOpacity="1"
						offset="100%"
					></stop>
				</linearGradient>
			</defs>
			<g stroke={`url(#${gradientId})`} fill="none" strokeLinecap="round">
				<circle
					r="363"
					cx="400"
					cy="400"
					strokeDasharray="2281 2281"
					transform="rotate(360, 400, 400)"
					opacity="0.57"
				></circle>
				<circle
					r="346.5"
					cx="400"
					cy="400"
					strokeDasharray="2073 2177"
					transform="rotate(343, 400, 400)"
					opacity="0.51"
				></circle>
				<circle
					r="330"
					cx="400"
					cy="400"
					strokeDasharray="1876 2073"
					transform="rotate(326, 400, 400)"
					opacity="0.57"
				></circle>
				<circle
					r="313.5"
					cx="400"
					cy="400"
					strokeDasharray="1688 1970"
					transform="rotate(309, 400, 400)"
					opacity="0.95"
				></circle>
				<circle
					r="297"
					cx="400"
					cy="400"
					strokeDasharray="1511 1866"
					transform="rotate(291, 400, 400)"
					opacity="0.72"
				></circle>
				<circle
					r="280.5"
					cx="400"
					cy="400"
					strokeDasharray="1343 1762"
					transform="rotate(274, 400, 400)"
					opacity="0.42"
				></circle>
				<circle
					r="264"
					cx="400"
					cy="400"
					strokeDasharray="1185 1659"
					transform="rotate(257, 400, 400)"
					opacity="0.12"
				></circle>
				<circle
					r="247.5"
					cx="400"
					cy="400"
					strokeDasharray="1037 1555"
					transform="rotate(240, 400, 400)"
					opacity="0.24"
				></circle>
				<circle
					r="231"
					cx="400"
					cy="400"
					strokeDasharray="898 1451"
					transform="rotate(223, 400, 400)"
					opacity="0.34"
				></circle>
				<circle
					r="214.5"
					cx="400"
					cy="400"
					strokeDasharray="770 1348"
					transform="rotate(206, 400, 400)"
					opacity="0.79"
				></circle>
				<circle
					r="198"
					cx="400"
					cy="400"
					strokeDasharray="652 1244"
					transform="rotate(189, 400, 400)"
					opacity="0.27"
				></circle>
				<circle
					r="181.5"
					cx="400"
					cy="400"
					strokeDasharray="543 1140"
					transform="rotate(171, 400, 400)"
					opacity="0.54"
				></circle>
				<circle
					r="165"
					cx="400"
					cy="400"
					strokeDasharray="444 1037"
					transform="rotate(154, 400, 400)"
					opacity="0.22"
				></circle>
				<circle
					r="148.5"
					cx="400"
					cy="400"
					strokeDasharray="355 933"
					transform="rotate(137, 400, 400)"
					opacity="0.48"
				></circle>
				<circle
					r="132"
					cx="400"
					cy="400"
					strokeDasharray="276 829"
					transform="rotate(120, 400, 400)"
					opacity="0.50"
				></circle>
				<circle
					r="115.5"
					cx="400"
					cy="400"
					strokeDasharray="207 726"
					transform="rotate(103, 400, 400)"
					opacity="0.65"
				></circle>
				<circle
					r="99"
					cx="400"
					cy="400"
					strokeDasharray="148 622"
					transform="rotate(86, 400, 400)"
					opacity="0.37"
				></circle>
				<circle
					r="82.5"
					cx="400"
					cy="400"
					strokeDasharray="99 518"
					transform="rotate(69, 400, 400)"
					opacity="0.77"
				></circle>
				<circle
					r="66"
					cx="400"
					cy="400"
					strokeDasharray="59 415"
					transform="rotate(51, 400, 400)"
					opacity="0.77"
				></circle>
				<circle
					r="49.5"
					cx="400"
					cy="400"
					strokeDasharray="30 311"
					transform="rotate(34, 400, 400)"
					opacity="0.65"
				></circle>
				<circle
					r="33"
					cx="400"
					cy="400"
					strokeDasharray="10 207"
					transform="rotate(17, 400, 400)"
					opacity="0.90"
				></circle>
				<circle
					r="16.5"
					cx="400"
					cy="400"
					strokeDasharray="0 104"
					opacity="0.09"
				></circle>
			</g>
		</svg>
	);
}
