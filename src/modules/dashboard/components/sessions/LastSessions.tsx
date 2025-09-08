import { TypeDayIcon } from "@/modules/globals/components/day-type/TypeDayIcon";
import { StatusIcon } from "@/modules/globals/components/status/StatusIcons";
import { getStatusTextColorClass } from "@/modules/globals/lib/get-classes";

type SessionTrainingDayType = {
	id: number;
	name: string;
	description?: string;
	date: string;
	type: "training";
} & (
	| { exercisesCompleted: number; totalExercises: number; status: "completed" }
	| { status: "canceled" }
);

type SessionRestDayType = {
	id: number;
	name: string;
	date: string;
	type: "rest";
	status: "completed";
};

type SessionListItemType = SessionTrainingDayType | SessionRestDayType;

const LAST_SESSIONS: SessionListItemType[] = [
	{
		id: 1,
		name: "Rest Day",
		status: "completed",
		date: "5 days ago",
		type: "rest",
	},
	{
		id: 2,
		name: "Pull Day",
		description: "Take it easy today!",
		exercisesCompleted: 3,
		totalExercises: 4,
		status: "completed",
		date: "4 days ago",
		type: "training",
	},
	{
		id: 3,
		name: "Rest Day",
		status: "completed",
		date: "3 days ago",
		type: "rest",
	},
	{
		id: 4,
		name: "Legs Day",
		description: "Take it easy today!",
		exercisesCompleted: 3,
		totalExercises: 4,
		status: "completed",
		date: "2 days ago",
		type: "training",
	},
	{
		id: 5,
		name: "Rest Day",
		status: "completed",
		date: "1 day ago",
		type: "rest",
	},
];

function SessionListItem({
	className,
	session,
}: {
	className?: string;
	session: SessionListItemType;
}) {
	const { name, date, type, status } = session;
	const statusTextColorClass = getStatusTextColorClass(status);
	return (
		<li
			className={`flex items-center gap-4 justify-between w-full ${statusTextColorClass} ${className}`}
		>
			<span className="flex items-center gap-1">
				<StatusIcon status={status} className="size-5" />
				{name}
			</span>
			<span className="flex items-center gap-4 text-foreground/50 font-light text-sm text-right">
				{date}
				<TypeDayIcon type={type} className="size-5" />
			</span>
		</li>
	);
}

export function LastSessions({ className }: { className?: string }) {
	return (
		<ul className={`flex flex-col gap-1 w-full ${className}`}>
			{LAST_SESSIONS.map((session) => (
				<SessionListItem
					className="rounded-lg p-2 border-1 border-foreground/5"
					session={session}
					key={session.id}
				/>
			))}
		</ul>
	);
}
