import {
	DashboardCard,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardSubHeader,
	DashboardCardTag,
} from '../../dashboard/components/Card';
import { getBodySectionsWithMuscularGroups } from '@/modules/bodysection/presentation/bodysection.actions';

export default async function MusclesTable() {
	const { data: bodySections } = await getBodySectionsWithMuscularGroups();

	return bodySections.map((section) => {
		return (
			<DashboardCard key={section.id}>
				<DashboardCardHeader title={section.name}>
					<DashboardCardSubHeader
						description={`Muscular groups:`}
						counters={[
							'3 routines',
							'5 exercises',
							`${section.muscularGroups?.length ?? 0} muscles`,
						]}
					></DashboardCardSubHeader>
				</DashboardCardHeader>
				<DashboardCardFooter>
					<ul className="flex flex-wrap gap-2">
						{section.muscularGroups.map(({ name, id }) => (
							<DashboardCardTag key={id} tag={{ value: name, selected: false }} />
						))}
					</ul>
				</DashboardCardFooter>
			</DashboardCard>
		);
	});
}
