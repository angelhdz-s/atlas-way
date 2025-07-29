export function MuscularGroupsTable() {
	const MUSCULAR_GROUPS = [
		{
			id: 1,
			name: "Chest",
			bodySection: "Torso",
			date: "2023-10-01",
		},
		{
			id: 2,
			name: "Back",
			bodySection: "Torso",
			date: "2023-10-02",
		},
		{
			id: 3,
			name: "Quads",
			bodySection: "Legs",
			date: "2023-10-03",
		},
		{
			id: 4,
			name: "Biceps",
			bodySection: "Arms",
			date: "2023-10-04",
		},
		{
			id: 5,
			name: "Shoulders",
			bodySection: "Arms",
			date: "2023-10-05",
		},
	];
	return (
		<div className="bg-zinc-900/50 p-4 rounded-lg shadow-md">
			<header>
				<h2 className="text-xl font-bold mb-2 pl-2 ld-main-fg">
					Muscular Groups
				</h2>
			</header>
			<table className="w-full text-left">
				<thead>
					<tr className="*:px-2 *:py-1">
						<th>Group</th>
						<th>Body Section</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{MUSCULAR_GROUPS.map(({ id, name, bodySection, date }) => {
						return (
							<tr
								key={id}
								className="*:px-2 *:py-1 border-t-[1px] border-zinc-700"
							>
								<td>{name}</td>
								<td>{bodySection}</td>
								<td>{date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
