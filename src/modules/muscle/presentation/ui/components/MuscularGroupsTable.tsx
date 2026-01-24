import { getBodySections } from '@/modules/body-section/presentation/body-section.actions';

export async function MuscularGroupsTable() {
	const musculargroup = [
		{ id: '1654-4546', name: 'Chest', bodySection: 'Torso', createdAt: new Date(2025, 7, 15) },
	];
	const { data: bodySections } = await getBodySections();

	return (
		<div className="bg-zinc-900/50 p-4 rounded-lg shadow-md">
			<header>
				<h2 className="text-xl font-bold mb-2 pl-2 ld-main-fg">Muscular Groups</h2>
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
					{musculargroup.map(({ id, name, bodySection, createdAt }) => {
						return (
							<tr key={id} className="*:px-2 *:py-1 border-t-px border-zinc-700">
								<td>{name}</td>
								<td>{bodySection}</td>
								<td>{createdAt.toISOString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
