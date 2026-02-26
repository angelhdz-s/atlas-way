import { DAYS, DayWeeksType } from '@/presentation/globals/config/defaults';
import { DayTypeProps, RoutineType, StatusDayType } from '@/presentation/globals/mocks/routines';
import {
	CardHighlightType,
	DashboardCard,
	DashboardCardButton,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardMain,
	DashboardCardSubHeader,
	DashboardCardTags,
} from '@/presentation/modules/dashboard/components/Card';
import {
	Barbell,
	BarbellOff,
	CalendarWeek,
	CircleCheck,
	XCircle,
} from '@/presentation/globals/components/Icons';
import { IconTypes } from '@/presentation/globals/types';

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
		class: 'border-red-950 text-red-800 light:border-red-300 light:text-red-400',
		title: 'Canceled',
		icon: XCircle,
	},
	completed: {
		class: 'border-green-950 text-green-800 light:border-green-400 light:text-green-600',
		title: 'Completed',
		icon: CircleCheck,
	},
	current: {
		class: 'bg-green-800 border-green-800 fg-strong light:bg-green-600 light:border-green-600',
		title: 'Current Day',
		icon: Barbell,
	},
	next: {
		class: 'border-subtle/50 fg-strong',
		title: 'Next Day',
		icon: CalendarWeek,
	},
};

const DAY_TYPE_REST = {
	class: 'opacity-50',
	icon: BarbellOff,
};

const getDayAttributes = (status: StatusDayType, type: DayTypeProps) => {
	if (type === 'rest')
		return {
			className: `${STATUS_DAYS[status].class} ${status === 'next' ? DAY_TYPE_REST.class : ''}`,
			Icon: status === 'completed' ? STATUS_DAYS[status].icon : DAY_TYPE_REST.icon,
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
			className={`rounded w-17 h-8 flex items-center gap-1 px-2 text-center justify-center border transition-colors ${className}`}
			title={title}
		>
			{name}
			<Icon className="size-5" strokeWidth="1.5" />
		</li>
	);
}

export function Routine({ type, data }: { data: RoutineType; type?: CardHighlightType }) {
	const { name, description, days, exercisesCount, date, sessions } = data;

	const trainingSessions = days.filter((day) => day.type !== 'rest');
	const sessionsTags = trainingSessions.map((day) => ({
		value: day.name,
		selected: day.status === 'current',
	}));

	return (
		<DashboardCard type={type}>
			<DashboardCardHeader
				title={name}
				decoration={
					<span className="block aspect-square size-4 rounded-full bg-primary"></span>
				}
			>
				<DashboardCardSubHeader
					counters={[date, `${exercisesCount} exercises`, `${sessions} sessions`]}
					description={description}
				/>
			</DashboardCardHeader>
			<DashboardCardMain>
				<footer>
					<DashboardCardTags values={sessionsTags} />
				</footer>
				<main>
					<ul className="text-sm flex gap-2 items-center flex-wrap">
						{days.map(({ weekDay, type, status }) => (
							<ListDayItem
								key={weekDay}
								name={DAYS[weekDay as DayWeeksType].shortName}
								type={type}
								status={status}
							/>
						))}
					</ul>
				</main>
			</DashboardCardMain>
			<DashboardCardFooter>
				<DashboardCardButton>
					<CalendarWeek className="size-6" strokeWidth="1.3" />
					Edit
				</DashboardCardButton>
			</DashboardCardFooter>
		</DashboardCard>
	);
}
