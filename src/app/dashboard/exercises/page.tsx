import Link from "next/link";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import {} from "@/mocks/sessions";
import { BODY_SECTIONS, EXERCISES, ExerciseType } from "@/constants/db";

function Exercises({ exercises }: { exercises: ExerciseType[] }) {
	return (
		<table className="w-full text-left">
			<thead>
				<tr className="*:px-2 *:py-1 ld-main-fg">
					<th>Exercise</th>
					<th>Description</th>
					<th>Muscles</th>
				</tr>
			</thead>
			<tbody>
				{exercises
					.sort((a, b) => a.name.localeCompare(b.name))
					.map(({ name, description, muscles }, index) => {
						return (
							<tr
								key={index}
								className="*:px-2 *:py-1 border-t-[1px] border-zinc-700"
							>
								<td>{name}</td>
								<td>{description}</td>
								<td>{muscles.map((muscle) => muscle.name).join(", ")}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
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
						<article key={index}>
							<h2 className="text-2xl font-bold ld-main-fg">{section}</h2>
							<Exercises exercises={exercises} />
						</article>
					);
				})}
			</PageContent>
		</PageContainer>
	);
}
