import Link from "next/link";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function ExercisesPage() {
	const EXERCISES = [
		{
			id: 1,
			name: "Push ups",
			muscles: ["Chest"],
			sets: 3,
			reps: 10,
			rest: 90,
			date: "2023-10-01",
		},
		{
			id: 2,
			name: "Pull ups",
			muscles: ["Back"],
			sets: 3,
			reps: 8,
			rest: 120,
			date: "2023-10-02",
		},
		{
			id: 3,
			name: "Squats",
			muscles: ["Legs"],
			sets: 4,
			reps: 12,
			rest: 90,
			date: "2023-10-03",
		},
		{
			id: 4,
			name: "Deadlifts",
			muscles: ["Back", "Legs"],
			sets: 3,
			reps: 6,
			rest: 150,
			date: "2023-10-04",
		},
		{
			id: 5,
			name: "Bench Press",
			muscles: ["Chest", "Triceps"],
			sets: 4,
			reps: 8,
			rest: 120,
			date: "2023-10-05",
		},
	];
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
				<table className="w-full text-left">
					<thead>
						<tr className="*:px-2 *:py-1">
							<th>Exercise</th>
							<th>Muscles</th>
							<th>Sets</th>
							<th>Reps</th>
							<th>Rest</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{EXERCISES.map(({ id, name, muscles, sets, reps, rest, date }) => {
							return (
								<tr
									key={id}
									className="*:px-2 *:py-1 border-t-[1px] border-zinc-700"
								>
									<td>{name}</td>
									<td>{muscles.join(", ")}</td>
									<td>{sets}</td>
									<td>{reps}</td>
									<td>{rest}</td>
									<td>{date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</PageContent>
		</PageContainer>
	);
}
