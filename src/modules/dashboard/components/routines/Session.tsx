import { Bolt } from "@/modules/globals/components/Icons";
import {
	DashboardCard,
	DashboardCardButton,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardMain,
	DashboardCardSubHeader,
	DashboardCardTags,
} from "../Card";
import { ExerciseType, SessionDayType } from "@/mocks/sessions";

function ExercisesList({ exercises }: { exercises: ExerciseType[] }) {
	return (
		<ul className="flex flex-col gap-1 *:py-0.5">
			<li>
				<ul className="grid grid-cols-[1rem_1fr_3rem_3rem_3rem] gap-1 ld-main-fg">
					<li className="text-left">#</li>
					<li className="text-left">Exercise</li>
					<li className="text-center">Sets</li>
					<li className="text-center">Reps</li>
					<li className="text-center">Weight</li>
				</ul>
			</li>
			{exercises.map(({ name, sets, reps, weight }, index) => (
				<li
					className="relative before:absolute before:w-full before:h-[2px] before:top-[-1px] before:left-0 before:bg-subtle/20"
					key={index}
				>
					<ul className="font-light grid grid-cols-[1rem_1fr_3rem_3rem_3rem] gap-1">
						<li className="opacity-50">{index + 1}</li>
						<li>{name}</li>
						<li className="text-center">{sets}</li>
						<li className="text-center">{reps}</li>
						<li className="text-center">{weight}</li>
					</ul>
				</li>
			))}
		</ul>
	);
}

export function listUniqueTags(values: string[]) {
	return [...new Set(values)];
}

export function Session({ data }: { data: SessionDayType }) {
	const { name, description, exercises, date, routines } = data;

	const muscularGroups = exercises.map((e) => e.muscleGroup);
	const tags = listUniqueTags(muscularGroups).map((value) => ({
		value,
		selected: false,
	}));

	return (
		<DashboardCard>
			<DashboardCardHeader
				title={name}
				decoration={
					<span className="block aspect-square size-4 rounded-full bg-primary"></span>
				}
			>
				<DashboardCardSubHeader
					counters={[
						date,
						`${exercises.length} exercises`,
						`${routines} ${routines === 1 ? "routine" : "routines"}`,
					]}
					description={description}
				/>
			</DashboardCardHeader>

			<DashboardCardMain>
				<DashboardCardTags values={tags} />
				<ExercisesList
					exercises={exercises.sort((a, b) => a.name.localeCompare(b.name))}
				/>
			</DashboardCardMain>
			<DashboardCardFooter>
				<DashboardCardButton>
					<Bolt className="size-6" strokeWidth="1.3" />
					Edit
				</DashboardCardButton>
			</DashboardCardFooter>
		</DashboardCard>
	);
}
