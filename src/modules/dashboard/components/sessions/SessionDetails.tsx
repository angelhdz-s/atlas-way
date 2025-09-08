import { ExerciseRow } from "@/modules/dashboard/components/exercises/ExerciseList";
import {
	CircleOutline,
	SolidCircleCheck,
	SolidCircleX,
} from "@/modules/globals/components/Icons";
import { getStatusTextColorClass } from "@/modules/globals/lib/get-classes";
import { StatusDayType } from "@/modules/globals/mocks/routines";

export type exerciseType = {
	id: number;
	name: string;
	sets: number;
	reps: number;
	weight: number;
	status: StatusDayType;
};

export type SessionDetailsProps = {
	session: {
		id: number;
		name: string;
		description?: string;
		exercises: exerciseType[];
		status: StatusDayType;
	};
};

export function SessionDetails({ session }: SessionDetailsProps) {
	const { name, exercises, status } = session;
	const statusTextColorClass = getStatusTextColorClass(status);
	return (
		<>
			<header className={`flex items-center gap-2 ${statusTextColorClass}`}>
				<h4 className="text-lg">{name}</h4>
				<aside>
					{status === "completed" && <SolidCircleCheck className="size-6" />}
					{status === "canceled" && <SolidCircleX className="size-6" />}
					{status !== "completed" && status !== "canceled" && (
						<CircleOutline className="size-6" />
					)}
				</aside>
			</header>
			<main className="font-light">
				<ul>
					<li
						className={`grid grid-cols-[1.3rem_1fr_6rem_4rem]! gap-1 w-full text-sm font-light text-foreground/50 text-center`}
					>
						<span></span>
						<span className="text-left">Exercise</span>
						<span>Sets x Reps</span>
						<span>Weight</span>
					</li>
					{exercises.map((exercise, index) => (
						<ExerciseRow
							exercise={exercise}
							key={index}
							className={`grid-cols-[1.3rem_1fr_6rem_4rem]!`}
						/>
					))}
				</ul>
			</main>
		</>
	);
}
