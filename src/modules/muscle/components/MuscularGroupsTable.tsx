import { getBodySections } from '@/app/_actions/bodysection.actions';
import { getMuscularGroups } from '@/app/_actions/musculargroup.actions';
import { BodySection } from '@/modules/bodysection/domain/bodysection.entity';

export async function MuscularGroupsTable() {
	const { data: muscularGroups } = await getMuscularGroups();
	const { data: bodySections } = await getBodySections();

	const findBodySection = (id: BodySection['id']) => {
		return bodySections.find((bodySection) => bodySection.id === id);
	};

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
					{muscularGroups.map(({ id, name, bodySectionId, createdAt }) => {
						return (
							<tr key={id} className="*:px-2 *:py-1 border-t-px border-zinc-700">
								<td>{name}</td>
								<td>{findBodySection(bodySectionId)?.name ?? 'Unknown'}</td>
								<td>{createdAt.toISOString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
