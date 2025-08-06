import { DayTypeProps, RoutineType, StatusDayType } from "@/mocks/routines";
import {
	DashboardCard,
	DashboardCardButton,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardMain,
	DashboardCardSubHeader,
} from "@/modules/dashboard/components/Card";
import {
	Bolt,
	BoltSlash,
	CalendarDays,
	CircleCheck,
	XCircle,
} from "@/modules/globals/components/Icons";
import { IconTypes } from "@/modules/globals/types";

interface DayObjectType {
	class: string;
	title: string;
	icon: IconTypes;
}

type StatusDayTypes = {
	[K in StatusDayType]: DayObjectType;
};

const STATUS_DAYS: StatusDayTypes = {
	canceled: {
		class:
			"border-red-950 text-red-800 light:border-red-300 light:text-red-400",
		title: "Canceled",
		icon: XCircle,
	},
	completed: {
		class:
			"border-green-950 text-green-800 light:border-green-400 light:text-green-600",
		title: "Completed",
		icon: CircleCheck,
	},
	current: {
		class:
			"bg-green-800 border-green-800 text-main-foreground light:bg-green-600 light:border-green-600",
		title: "Current Day",
		icon: Bolt,
	},
	next: {
		class: "border-subtle/50 ld-main-fg",
		title: "Next Day",
		icon: CalendarDays,
	},
};

const DAY_TYPE_REST = {
	class: "opacity-50",
	icon: BoltSlash,
};

const getDayAttributes = (status: StatusDayType, type: DayTypeProps) => {
	if (type === "rest")
		return {
			className: `${STATUS_DAYS[status].class} ${DAY_TYPE_REST.class}}`,
			Icon: DAY_TYPE_REST.icon,
			title: `${STATUS_DAYS[status].title} - Rest Day`,
		};

	return {
		className: STATUS_DAYS[status].class,
		Icon: STATUS_DAYS[status].icon,
		title: `${STATUS_DAYS[status].title} - Training Day`,
	};
};

function ListDayItem({
	name,
	type,
	status,
}: {
	name: string;
	type: DayTypeProps;
	status: StatusDayType;
}) {
	const { className, title, Icon } = getDayAttributes(status, type);
	return (
		<li
			className={`rounded w-16 h-8 flex items-center gap-1 justify-center text-center border-1 transition-colors ${className}`}
			title={title}
		>
			<Icon className="size-5" strokeWidth="1.5" />
			{name}
		</li>
	);
}

export function Routine({ data }: { data: RoutineType }) {
	const { name, description, days, exercisesCount, date, sessions } = data;
	return (
		<DashboardCard>
			<DashboardCardHeader
				title={name}
				decoration={
					<span className="block aspect-square size-4 rounded-full bg-primary"></span>
				}
			>
				<DashboardCardSubHeader description={description}>
					<ul className="text-base flex gap-2">
						<li>{date}</li>
						<li className="flex items-center">
							<span className="block w-[1px] h-4 bg-subtle/50"></span>
						</li>
						<li>{exercisesCount} exercises</li>
						<li className="flex items-center">
							<span className="block w-[1px] h-4 bg-subtle/50"></span>
						</li>
						<li>{sessions} sessions</li>
					</ul>
				</DashboardCardSubHeader>
			</DashboardCardHeader>
			<DashboardCardMain>
				<main>
					<header className="mb-1">
						<span className="ld-sub-fg font-light">Current week:</span>
					</header>
					<ul className="text-sm flex gap-3 items-center flex-wrap">
						{days.map(({ weekDayShort, type, status }) => (
							<ListDayItem
								key={weekDayShort}
								name={weekDayShort}
								type={type}
								status={status}
							/>
						))}
					</ul>
				</main>

				<footer>
					<header>
						<span className="ld-sub-fg font-light">{"Today's session:"}</span>
					</header>
					<h3 className="text-xl ld-main-fg">
						{days.filter(({ status }) => status === "current")[0].name}
					</h3>
				</footer>
			</DashboardCardMain>
			<DashboardCardFooter>
				<DashboardCardButton>
					<CalendarDays className="size-6" strokeWidth="1.3" />
					Edit
				</DashboardCardButton>
			</DashboardCardFooter>
		</DashboardCard>
	);
}
