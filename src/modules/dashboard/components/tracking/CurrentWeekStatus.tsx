import {
	CircleOutline,
	SolidCircleCheck,
	SolidCircleX,
} from "@/modules/globals/components/Icons";
import { WEEK_DAYS } from "@/modules/globals/constants/date";
import { getNextDates, getSessionFromDate } from "@/modules/globals/lib/dates";
import { StatusDayType } from "@/modules/globals/mocks/routines";
import { TODAY } from "@/modules/globals/mocks/tracking";
import { IconTypes, SolidIconTypes } from "@/modules/globals/types";
import { CardTitle } from "../home/card/CardTitle";

const ICON_SIZE_CLASS = "size-8";

type CurrentWeekStatusDays = {
	day: number;
	status: StatusDayType;
	title: string;
};

function getCurrentWeekStatusDays(): CurrentWeekStatusDays[] {
	const dates: CurrentWeekStatusDays[] = [];

	const dayOfTheWeek = TODAY.getDay(); // 1 - 7

	const dateCopy = new Date(TODAY);

	const newInitialDate = new Date(
		dateCopy.setDate(TODAY.getDate() - dayOfTheWeek),
	);

	const datesArr = [newInitialDate, ...getNextDates(newInitialDate, 6)];

	datesArr.forEach((date) => {
		const { status, name } = getSessionFromDate(date);
		dates.push({ day: date.getDay(), status, title: name });
	});

	return dates;
}

function StatusDayIcon({
	className = "",
	icon: Icon,
}: {
	className: string;
	icon: IconTypes;
}) {
	return (
		<Icon className={`${ICON_SIZE_CLASS} ${className}`} strokeWidth="1.5" />
	);
}

function StatusDaySolidIcon({
	className = "",
	icon: Icon,
}: {
	className?: string;
	icon: SolidIconTypes;
}) {
	return <Icon className={`${ICON_SIZE_CLASS} ${className}`} />;
}

function StatusDay({
	status,
	className,
}: {
	status: StatusDayType;
	className?: string;
}) {
	if (status === "completed")
		return (
			<span className={` ${className}`}>
				<StatusDaySolidIcon className="text-complete" icon={SolidCircleCheck} />
			</span>
		);

	if (status === "canceled")
		return (
			<span className={` ${className}`}>
				<StatusDaySolidIcon className="text-cancel" icon={SolidCircleX} />
			</span>
		);

	if (status === "current")
		return (
			<span className={` ${className}`}>
				<StatusDayIcon className="text-accent" icon={CircleOutline} />
			</span>
		);

	// default return if status === "next"
	return (
		<span className={`${className}`}>
			<StatusDayIcon className="text-foreground/25" icon={CircleOutline} />
		</span>
	);
}

export function CurrentWeekStatus({ className = "" }: { className?: string }) {
	const currentWeekStatusDays = getCurrentWeekStatusDays();

	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<header>
				<CardTitle title="Week" />
			</header>
			<main className="flex items-center justify-center gap-1">
				{currentWeekStatusDays.map(({ day, status, title }) => {
					const dayName = WEEK_DAYS[day].initial;
					const className =
						status === "completed"
							? "text-complete"
							: status === "canceled"
								? "text-cancel"
								: "";
					return (
						<div
							key={day}
							className="flex flex-col justify-center"
							title={title}
						>
							<span
								className={`text-center text-sm font-black ${className || "text-foreground/75"}`}
							>
								{dayName}
							</span>
							<StatusDay status={status} />
						</div>
					);
				})}
			</main>
		</article>
	);
}
