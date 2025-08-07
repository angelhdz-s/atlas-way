import Link from "next/link";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import {} from "@/mocks/sessions";
import { BODY_SECTIONS, EXERCISES, ExerciseType } from "@/constants/db";
import {
	DashboardCard,
	DashboardCardButton,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardMain,
	DashboardCardSubHeader,
	DashboardCardTag,
} from "@/modules/dashboard/components/Card";
import { Bolt } from "@/modules/globals/components/Icons";

function Exercises({ exercises }: { exercises: ExerciseType[] }) {
	return exercises
		.sort((a, b) => a.name.localeCompare(b.name))
		.map(({ name, description, muscles }, index) => (
			<DashboardCard key={index} size="sm">
				<DashboardCardHeader title={name} decoration="">
					<DashboardCardSubHeader description={description} />
				</DashboardCardHeader>
				<DashboardCardMain>
					<ul className="flex items-center flex-wrap gap-1">
						{muscles.map((muscle, index) => (
							<DashboardCardTag
								key={index}
								tag={{ value: muscle.name, selected: false }}
							/>
						))}
					</ul>
				</DashboardCardMain>
				<DashboardCardFooter>
					<DashboardCardButton>
						<Bolt className="size-5" />
						Edit
					</DashboardCardButton>
				</DashboardCardFooter>
			</DashboardCard>
		));
}

function getExercisesByBodySection(bodySection: keyof typeof BODY_SECTIONS) {
	return Object.values(EXERCISES)
		.filter((exercise) => {
			return exercise.muscles.some(
				(muscle) => muscle.bodySection === BODY_SECTIONS[bodySection],
			);
		})
		.sort((a, b) => a.name.localeCompare(b.name));
}

export default function ExercisesPage() {
	const bodySections = Object.keys(BODY_SECTIONS);

	return (
		<PageContainer>
			<PageHeader
				title="Exercises"
				className="flex items-center justify-between"
			>
				<Link href="/dashboard/exercises/create" className="btn-primary btn-md">
					Create Exercise
				</Link>
			</PageHeader>
			<PageContent className="flex flex-col gap-8">
				{bodySections.map((section, index) => {
					const exercises = getExercisesByBodySection(
						section as keyof typeof BODY_SECTIONS,
					);

					console.log(exercises);
					return (
						<main key={index} className="flex flex-col gap-4">
							<h2 className="text-4xl font-bold ld-main-fg">{section}</h2>
							<main className="flex flex-wrap gap-2">
								<Exercises exercises={exercises} />
							</main>
						</main>
					);
				})}
			</PageContent>
		</PageContainer>
	);
}
