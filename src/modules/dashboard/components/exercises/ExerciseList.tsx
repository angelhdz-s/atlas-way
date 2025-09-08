import { XMark } from "@/modules/globals/components/Icons";
import { StatusIcon } from "@/modules/globals/components/status/StatusIcons";
import { getStatusTextColorClass } from "@/modules/globals/lib/get-classes";
import { StatusDayType } from "@/modules/globals/mocks/routines";

const iconSize = "size-4.5";

type ExerciseRowType = {
	status: StatusDayType;
	name: string;
	sets: number;
	reps: number;
	weight: number;
};

export function ExerciseRow({
	exercise,
	className = "",
}: {
	exercise: ExerciseRowType;
	className?: string;
}) {
	const { name, reps, sets, status, weight } = exercise;
	const statusTextColorClass = getStatusTextColorClass(status);
	return (
		<li
			className={`grid items-center grid-cols-[1.3rem_1fr_6rem_1rem] gap-1 text-center ${statusTextColorClass} ${className}`}
		>
			<span>
				<StatusIcon status={status} className={iconSize} />
			</span>
			<span className="text-left">{name}</span>
			<div className="grid grid-cols-[1fr_auto_1fr] gap-0.5">
				<span className="text-right">{sets}</span>
				<span className="flex items-center justify-center text-foreground/50">
					<XMark className="size-3 text-subtle" strokeWidth="3" />
				</span>
				<span className="text-left">{reps}</span>
			</div>
			<span className="text-center">{weight}</span>
		</li>
	);
}
