export default function MusclesTable() {
	const MUSCLES = [
		{
			id: 1,
			name: "Upper Chest",
			muscularGroup: "Chest",
			date: "2023-10-01",
		},
		{
			id: 2,
			name: "Lower Chest",
			muscularGroup: "Chest",
			date: "2023-10-02",
		},
		{
			id: 3,
			name: "Trapezius",
			muscularGroup: "Back",
			date: "2023-10-03",
		},
		{
			id: 4,
			name: "Latissimus Dorsi",
			muscularGroup: "Back",
			date: "2023-10-04",
		},
		{
			id: 5,
			name: "Rectus Femoris",
			muscularGroup: "Quads",
			date: "2023-10-05",
		},
	];
	return (
		<div className="bg-zinc-900/50 p-4 rounded-lg shadow-md">
			<header>
				<h2 className="text-xl font-bold mb-2 pl-2 ld-main-fg">Muscles</h2>
			</header>
			<table className="w-full text-left">
				<thead>
					<tr className="*:px-2 *:py-1">
						<th>Group</th>
						<th>Muscular Groups</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{MUSCLES.map(({ id, name, muscularGroup, date }) => {
						return (
							<tr
								key={id}
								className="*:px-2 *:py-1 border-t-[1px] border-zinc-700"
							>
								<td>{name}</td>
								<td>{muscularGroup}</td>
								<td>{date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
