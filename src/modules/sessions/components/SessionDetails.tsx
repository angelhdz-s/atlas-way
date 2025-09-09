import { ExerciseRow } from "@/modules/exercises/components/ExerciseList";
import { StatusIcon } from "@/modules/status/components/StatusIcons";
import {
	getGridColsClassFromWithStatus,
	getStatusTextColorClass,
} from "@/modules/globals/lib/get-classes";
import { StatusDayType } from "@/modules/globals/mocks/routines";

export type exerciseType = {
	id: number;
	name: string;
	sets: number;
	reps: number;
	weight: number;
	status: StatusDayType;
};

export type SessionDetailsType = {
	id: number;
	name: string;
	description?: string;
	exercises: exerciseType[];
	status: StatusDayType;
	date?: string;
};

export function SessionDetails({
	withStatus = false,
	session,
}: {
	withStatus?: boolean;
	session: SessionDetailsType;
}) {
	const { name, exercises, status } = session;
	const statusTextColorClass = getStatusTextColorClass(status);
	const withStatusGridClass = getGridColsClassFromWithStatus(withStatus);
	return (
		<>
			<header
				className={`flex items-center gap-2 justify-between ${statusTextColorClass}`}
			>
				<main className="flex items-center gap-2">
					<h4 className="text-lg">{name}</h4>
					{withStatus && (
						<aside>
							<StatusIcon status={status} className="size-6" />
						</aside>
					)}
				</main>
				{session.date && (
					<aside>
						<span className="bg-subtle/5 text-foreground/50 text-sm py-1 px-3 rounded-full">
							{session.date}
						</span>
					</aside>
				)}
			</header>
			<main className="font-light">
				<ul>
					<li
						className={`grid gap-1 w-full text-sm font-light text-foreground/50 text-center ${withStatusGridClass}`}
					>
						{withStatus && <span></span>}
						<span className="text-left">Exercise</span>
						<span>Sets x Reps</span>
						<span>Weight</span>
					</li>
					{exercises.map((exercise, index) => (
						<ExerciseRow
							withStatus={withStatus}
							exercise={exercise}
							key={index}
						/>
					))}
				</ul>
			</main>
		</>
	);
}
