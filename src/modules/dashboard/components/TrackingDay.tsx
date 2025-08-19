import { DAYS, DayWeeksType } from "@/config/defaults";
import { getISOStringDate, getSessionFromDate } from "@/lib/dates";
import { TODAY } from "@/mocks/tracking";
import {
	BoltSlash,
	CircleCheck,
	CircleOutline,
	Clock,
	XCircle,
} from "@/modules/globals/components/Icons";
import { IconTypes } from "@/modules/globals/types";

const STATUS_ICONS = {
	completed: CircleCheck,
	canceled: XCircle,
	current: Clock,
	next: CircleOutline,
};

const TRACKS_DAY_RANGES_CLASSES = {
	COMPLETED: "bg-green-800/10",
	TODAY: "bg-blue-600/10",
	NEXT: "",
};

function getTrackDayRangeClass(date: Date) {
	const currentDate = getISOStringDate(date);
	const todayDate = getISOStringDate(TODAY);

	if (currentDate === todayDate) {
		return TRACKS_DAY_RANGES_CLASSES.TODAY;
	}
	if (currentDate < todayDate) {
		return TRACKS_DAY_RANGES_CLASSES.COMPLETED;
	}

	return TRACKS_DAY_RANGES_CLASSES.NEXT;
}

function DefaultStatusIcon({ Icon }: { Icon: IconTypes }) {
	return <Icon className="size-5" strokeWidth="1.8" />;
}

function WeekDayTooltip({ date }: { date: Date }) {
	const dayOfWeek = DAYS[(date.getDay() + 1) as DayWeeksType].shortName;
	return (
		<div
			className="
		absolute rounded-full ld-sec-bg px-4 left-2 bottom-[calc(100%+0.75rem)] w-fit h-fit hidden group-hover:block
		after:absolute after:z-0 after:size-2 after:bg-sec-background light:after:bg-light-sec-background after:inset-0 after:mx-auto after:-bottom-1 after:top-auto after:rotate-45
		"
		>
			<span className="block w-fit py-1.5 leading-[1] text-xs text-zinc-400 font-medium">
				{dayOfWeek}
			</span>
		</div>
	);
}

function NextTrainingDayTaskItem({ task }: { task: string }) {
	return (
		<div className="flex items-center gap-1">
			<CircleOutline className="size-4" strokeWidth="1" />
			<span className="text-sm font-light">{task}</span>
		</div>
	);
}

export function TrackingDay({
	className = "",
	date,
}: {
	className?: string;
	date: Date;
}) {
	const dateString = `${date.toString().split(" ")[1]}, ${date.getDate()}`;
	const session = getSessionFromDate(date);
	const dayTypeClass = getTrackDayRangeClass(date);

	return (
		<article
			className={`group relative w-full min-h-48 rounded-none flex flex-col group outline-2 -outline-offset-2 outline-transparent hover:outline-zinc-900 transition-colors ${className} ${dayTypeClass}`}
		>
			<header className="flex items-center justify-between bg-zinc-900/80 px-2 h-8 text-sm group-hover:ld-main-fg transition-colors">
				<span className="flex-1 hover:text-current/50 text-ellipsis overflow-hidden whitespace-nowrap font-medium ld-main-fg pr-2 cursor-pointer">
					{session.name}
				</span>
				<aside className="flex items-center gap-1">
					<span className="whitespace-nowrap">{dateString}</span>
					<button type="button" className=" h-full cursor-pointer">
						<DefaultStatusIcon Icon={STATUS_ICONS[session.status]} />
					</button>
				</aside>
			</header>
			<main className="relative p-2 flex-1 -outline-offset-1 outline-1 outline-zinc-900">
				{session.type === "TRAINING" &&
					(session.status === "next" || session.status === "current") && (
						<div className="p-2 w-fit">
							{session.exercises.map((exercise, index) => (
								<NextTrainingDayTaskItem key={index} task={exercise.name} />
							))}
						</div>
					)}
				{session.type === "TRAINING" &&
					(session.status === "completed" || session.status === "canceled") && (
						<div className="p-2 w-fit">
							{session.exercicesDone.map((exercise, index) => (
								<NextTrainingDayTaskItem key={index} task={exercise.name} />
							))}
						</div>
					)}
				{session.type === "REST" && (
					<div className="grid place-content-center p-2 h-full">
						<div className="text-current/20 group-hover:text-current flex flex-col items-center justify-center gap-2">
							<BoltSlash className="size-20" strokeWidth="0.5" />
							<span className="font-light">Rest Day</span>
						</div>
					</div>
				)}
				<div className="absolute mask-radial-at-top mask-radial-[50%_50%] mask-radial-from-0% mask-radial-to-250% inset-0 transition-opacity opacity-[0.05] group-hover:opacity-[0.15] bg-[url('/backgrounds/grid.svg')] [background-size:50px]"></div>
			</main>
			<WeekDayTooltip date={date} />
		</article>
	);
}
