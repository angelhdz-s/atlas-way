function Day({
	children,
	unselected = false,
}: {
	children: React.ReactNode;
	unselected?: boolean;
}) {
	const className = !unselected
		? 'border-accent text-accent light:border-black light:text-black'
		: 'text-foreground border-foreground opacity-50 light:opacity-100 light:border-black/40 light:text-black';
	return (
		<li className={`text-xs font-light px-2 py-1 border rounded-full ${className}`}>
			{children}
		</li>
	);
}

export function DaysSelection() {
	return (
		<div className="flex flex-col gap-1 scale-100 pointer-events-none select-none">
			<ul className="flex gap-1">
				<Day unselected>Saturday</Day>
				<Day unselected>Sunday</Day>
				<Day>Monday</Day>
				<Day>Tuesday</Day>
			</ul>
			<ul className="flex gap-1 -ml-10">
				<Day>Wednesday</Day>
				<Day>Thursday</Day>
				<Day>Friday</Day>
				<Day unselected>Saturday</Day>
			</ul>
			<ul className="flex gap-1 -ml-10">
				<Day unselected>Sunday</Day>
				<Day>Monday</Day>
				<Day>Tuesday</Day>
				<Day>Wednesday</Day>
			</ul>
		</div>
	);
}
