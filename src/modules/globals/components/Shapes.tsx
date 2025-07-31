"use client";

import { useId } from "react";

export function Shape01({
	className = "",
	color1 = "currentColor",
	color2 = "currentColor",
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
	color1 = "currentColor",
	color2 = "currentColor",
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
	color1 = "currentColor",
	color2 = "currentColor",
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
