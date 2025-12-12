import {
	BODY_SECTIONS,
	BodySectionsKeys,
	MUSCLES,
	MuscleType,
} from '@/modules/globals/constants/db';
import {
	DashboardCard,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardSubHeader,
	DashboardCardTag,
} from '../../dashboard/components/Card';
import { getBodySections } from '@/app/_actions/bodysection.actions';
import { getMuscles, getMusclesByBodySection } from '@/app/_actions/muscle.actions';
import { BodySectionProps } from '@/modules/bodysection/domain/bodysection.schema';
import { BodySection } from '@/modules/bodysection/domain/bodysection.entity';

async function Muscles({ bodySectionId }: { bodySectionId: BodySectionProps['id'] }) {
	const { data: muscles } = await getMuscles();
	return (
		<ul className="flex flex-wrap gap-2">
			{muscles.map(({ name }, key) => (
				<DashboardCardTag key={key} tag={{ value: name, selected: false }} />
			))}
		</ul>
	);
}

export default async function MusclesTable() {
	const { data: bodySections } = await getBodySections();
	const muscleCounts: { length: number; bodySectionId: BodySection['id'] }[] = [];

	for (const section of bodySections) {
		const { data: muscles } = await getMusclesByBodySection(section.id);
		muscleCounts.push({
			length: muscles.length,
			bodySectionId: section.id,
		});
	}
	return bodySections.map((section) => {
		const muscleCount = muscleCounts.find(
			(musclCount) => musclCount.bodySectionId === section.id
		);

		return (
			<DashboardCard key={section.id}>
				<DashboardCardHeader title={section.name}>
					<DashboardCardSubHeader
						description={`Muscles in the ${section.name} section`}
						counters={[
							'3 routines',
							'5 exercises',
							`${muscleCount?.length ?? 0} muscles`,
						]}
					></DashboardCardSubHeader>
				</DashboardCardHeader>
				<DashboardCardFooter>
					<Muscles bodySectionId={section.id} />
				</DashboardCardFooter>
			</DashboardCard>
		);
	});
}
