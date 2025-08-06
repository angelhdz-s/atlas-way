import { Bolt, CalendarDays } from "@/modules/globals/components/Icons";
import {
	DashboardCard,
	DashboardCardButton,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardMain,
	DashboardCardSubHeader,
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

export function Session({ data }: { data: SessionDayType }) {
	const { name, description, exercises, date, routines } = data;
	return (
		<DashboardCard>
			<DashboardCardHeader
				title={name}
				decoration={
					<span className="block aspect-square size-4 rounded-full bg-primary"></span>
				}
			>
				<DashboardCardSubHeader>
					<ul className="text-base flex gap-4">
						<li>{date}</li>
						<li className="flex items-center">
							<span className="block w-[1px] h-4 bg-subtle/50"></span>
						</li>
						<li>{exercises.length} exercises</li>
						<li className="flex items-center">
							<span className="block w-[1px] h-4 bg-subtle/50"></span>
						</li>
						<li>{`${routines} ${routines === 1 ? "routine" : "routines"}`}</li>
					</ul>
				</DashboardCardSubHeader>
			</DashboardCardHeader>

			<DashboardCardMain description={description}>
				<ExercisesList exercises={exercises} />
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
