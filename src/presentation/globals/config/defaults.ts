import { NotificationRelevanceType } from '@/presentation/globals/mocks/notifications';
import type { ToastType } from '@/presentation/globals/types.d';

export const NOTIFICATION_DEFAULT_RELEVANCE: NotificationRelevanceType = 'info';

export const TOAST_DURATION = 5000;
export const TOAST_TYPE: ToastType = 'success';

export type DayWeeksType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type DayType<DayWeek> = {
	name: string;
	shortName: string;
	weekDay: DayWeek;
};

type DaysType = {
	[K in DayWeeksType]: DayType<K>;
};

export const DAYS: DaysType = {
	1: {
		name: 'Monday',
		shortName: 'Mon',
		weekDay: 1,
	},
	2: {
		name: 'Tuesday',
		shortName: 'Tue',
		weekDay: 2,
	},
	3: {
		name: 'Wednesday',
		shortName: 'Wed',
		weekDay: 3,
	},
	4: {
		name: 'Thursday',
		shortName: 'Thu',
		weekDay: 4,
	},
	5: {
		name: 'Friday',
		shortName: 'Fri',
		weekDay: 5,
	},
	6: {
		name: 'Saturday',
		shortName: 'Sat',
		weekDay: 6,
	},
	7: {
		name: 'Sunday',
		shortName: 'Sun',
		weekDay: 7,
	},
};
