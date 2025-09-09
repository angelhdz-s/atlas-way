"use client";
type Point = { x: number; y: number };

export function LineChart({
	data = [
		{ x: 0, y: 5 },
		{ x: 1, y: 8 },
		{ x: 2, y: 4 },
		{ x: 3, y: 10 },
		{ x: 4, y: 7 },
		{ x: 5, y: 8 },
	],
	width = 400,
	height = 200,
	padding = 10,
}: {
	data?: Point[];
	width?: number;
	height?: number;
	padding?: number;
}) {
	const maxX = Math.max(...data.map((d) => d.x));
	const maxY = Math.max(...data.map((d) => d.y));

	const scaleX = (val: number) =>
		padding + (val / maxX) * (width - padding * 2);
	const scaleY = (val: number) =>
		height - padding - (val / maxY) * (height - padding * 2);

	const pathD = data
		.map((p, i) => {
			const x = scaleX(p.x);
			const y = scaleY(p.y);
			return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
		})
		.join(" ");

	return (
		<svg
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			height={height}
			className="bg-subtle/[0.05]"
		>
			<defs>
				<linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="0%">
					<animate
						attributeName="y2"
						values="0%;100%"
						dur="0.3s"
						begin="0.3s"
						fill="freeze"
					/>

					<stop
						offset="0%"
						stopColor="currentColor"
						className="text-primary"
					></stop>
					<stop
						offset="100%"
						stopColor="currentColor"
						className="text-secondary/0"
					/>
				</linearGradient>
			</defs>

			<rect
				width={width - padding * 2}
				height={height - padding * 2}
				x={padding}
				y={padding}
				fill="none"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				className="text-subtle/10"
			/>

			{data.map((p, i) => (
				<circle
					key={i}
					cx={scaleX(p.x)}
					cy={scaleY(p.y)}
					r={3}
					fill="currentColor"
					className="text-primary"
					opacity={0}
				>
					<animate
						attributeName="opacity"
						from="0"
						to="1"
						dur="0.1s"
						begin={`${(i * 0.65) / data.length}s`}
						fill="freeze"
					/>
				</circle>
			))}

			<path
				d={pathD + ` V ${height - padding} H ${scaleX(data[0].x)} Z`}
				fill="url(#lineGradient)"
				stroke="none"
				className="text-primary"
			></path>

			<path
				d={pathD}
				fill="none"
				stroke="currentColor"
				strokeWidth={3}
				strokeLinejoin="round"
				strokeLinecap="round"
				className="text-primary"
				strokeDasharray={3000}
				strokeDashoffset={3000}
			>
				<animate
					attributeName="stroke-dashoffset"
					from="3000"
					to="0"
					dur="1s"
					fill="freeze"
				/>
			</path>
		</svg>
	);
}

export function BarCharts({
	data = [
		{ x: 0, y: 5 },
		{ x: 1, y: 8 },
		{ x: 2, y: 4 },
		{ x: 3, y: 10 },
		{ x: 4, y: 7 },
		{ x: 5, y: 8 },
		{ x: 6, y: 8 },
		{ x: 7, y: 4 },
		{ x: 8, y: 6 },
	],
	width = 400,
	height = 200,
	padding = 10,
	gap = 0.04,
}: {
	data?: Point[];
	width?: number;
	height?: number;
	padding?: number;
	gap?: number;
}) {
	const widthAvailable = (width - padding * 2) / data.length;
	const absoluteWidth = width - padding * 2;

	const absoluteHeight = height - padding * 2;

	const barWidth = widthAvailable - absoluteWidth * gap;
	const freeWidth = absoluteWidth - barWidth * data.length;

	const maxY = Math.max(...data.map((d) => d.y));

	const X = (i: number) =>
		i === 0
			? padding
			: padding + i * (barWidth + freeWidth / (data.length - 1));
	const scaleY = (val: number) =>
		height - padding - (val / maxY) * absoluteHeight;

	return (
		<svg
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			height={height}
			className="bg-subtle/[0.05]"
		>
			<defs>
				<linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop
						offset="0%"
						stopColor="currentColor"
						className="text-primary/50"
					></stop>
					<stop
						offset="100%"
						stopColor="currentColor"
						className="text-primary/5"
						opacity={0}
					/>
				</linearGradient>
				<linearGradient id="strokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop
						offset="10%"
						stopColor="currentColor"
						className="text-primary"
					/>
					<stop
						offset="80%"
						stopColor="currentColor"
						className="text-primary/5"
					/>
					<stop
						offset="100%"
						stopColor="currentColor"
						className="text-primary/0"
						opacity={0}
					/>
				</linearGradient>
			</defs>

			<rect
				width={width - padding * 2}
				height={absoluteHeight}
				x={padding}
				y={padding}
				fill="none"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				className="text-subtle/10"
			/>

			{Array.from({ length: maxY - 1 }).map((_, i) => (
				<line
					key={i}
					x1={padding}
					y1={padding + ((i + 1) * absoluteHeight) / maxY}
					x2={absoluteWidth + padding}
					y2={padding + ((i + 1) * absoluteHeight) / maxY}
					stroke="currentColor"
					strokeWidth={1}
					strokeLinecap="round"
					className="text-subtle/10"
				/>
			))}

			{data.map((p, i) => {
				const heightBar = height - padding - scaleY(p.y);
				const widthBar = barWidth;
				const delay = `${(i * 0.65) / data.length}s`;
				const xBar = X(i);
				const yBar = scaleY(p.y);
				return (
					<rect
						key={i}
						width={widthBar}
						height={0}
						x={xBar}
						y={yBar}
						fill="url(#barGradient)"
						stroke="url(#strokeGradient)"
						strokeLinecap="butt"
						strokeWidth={1.5}
					>
						<title>{`(${p.x}, ${p.y})`}</title>
						<animate
							attributeName="height"
							values={`0;${heightBar}`}
							dur="0.25s"
							begin={delay}
							fill="freeze"
						/>
						<animate
							attributeName="y"
							values={`${height - padding};${yBar}`}
							dur="0.25s"
							begin={delay}
							fill="freeze"
						/>
					</rect>
				);
			})}
		</svg>
	);
}
