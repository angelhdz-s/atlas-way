function SimpleTableRow({ row }: { row: { key: number; name: string } }) {
	return (
		<>
			<li className="fg-muted border-t border-bd-strong">{row.key + 1}</li>
			<li className="fg-muted border-t border-bd-strong">{row.name}</li>
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
		<ul className="grid grid-cols-[1.5rem_1fr] *:py-0.5 font-light text-sm">
			<li className="fg-default font-medium">{header.key}</li>
			<li className="fg-default font-medium">{header.name}</li>
			{values.map((value) => (
				<SimpleTableRow key={value.key} row={value} />
			))}
		</ul>
	);
}
