import {
	BODY_SECTIONS,
	BodySectionsKeys,
	MUSCLES,
	MuscleType,
} from "@/modules/globals/constants/db";
import {
	DashboardCard,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardSubHeader,
	DashboardCardTag,
} from "../Card";

function Muscles({ muscles }: { muscles: MuscleType[] }) {
	return (
		<ul className="flex flex-wrap gap-2">
			{muscles.map(({ name }, key) => (
				<DashboardCardTag key={key} tag={{ value: name, selected: false }} />
			))}
		</ul>
	);
}

function getMusclesByBodySection(bodySection: BodySectionsKeys) {
	return Object.values(MUSCLES).filter((muscle) => {
		return muscle.bodySection === BODY_SECTIONS[bodySection];
	});
}

export default function MusclesTable() {
	const bodySections = Object.keys(BODY_SECTIONS);

	return bodySections.map((section, index) => {
		return (
			<DashboardCard key={index}>
				<DashboardCardHeader title={BODY_SECTIONS[section as BodySectionsKeys]}>
					<DashboardCardSubHeader
						description={`Muscles in the ${section} section`}
						counters={[
							"3 routines",
							"5 exercises",
							`${getMusclesByBodySection(section as keyof typeof BODY_SECTIONS).length} muscles`,
						]}
					></DashboardCardSubHeader>
				</DashboardCardHeader>
				<DashboardCardFooter>
					<Muscles
						muscles={getMusclesByBodySection(
							section as keyof typeof BODY_SECTIONS,
						).sort((a, b) => a.name.localeCompare(b.name))}
					/>
				</DashboardCardFooter>
			</DashboardCard>
		);
	});
}
