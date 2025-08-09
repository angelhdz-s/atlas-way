function SimpleTableRow({ row }: { row: { key: number; name: string } }) {
	return (
		<>
			<li className="text-current/80 border-t border-foreground/10">
				{row.key + 1}
			</li>
			<li className="border-t border-foreground/10">{row.name}</li>
		</>
	);
}

export function SimpleTable({
	header,
	values,
}: {
	header: { key: string; name: string };
	values: { key: number; name: string }[];
}) {
	return (
		<ul className="grid grid-cols-[1.5rem_1fr] *:py-0.5 font-light">
			<li className="ld-main-fg font-medium">{header.key}</li>
			<li className="ld-main-fg font-medium">{header.name}</li>
			{values.map((value) => (
				<SimpleTableRow key={value.key} row={value} />
			))}
		</ul>
	);
}
