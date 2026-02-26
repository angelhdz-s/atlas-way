import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';

type BestRecordItemType = {
	id: number;
	name: string;
	metric: string;
	value: string;
	date: string;
};
function BestRecordItem({ record }: { record: BestRecordItemType }) {
	const { name, metric, value, date } = record;
	return (
		<article className="bg-subtle/5 rounded-lg px-4 py-1">
			<header className="flex items-center justify-between">
				<h3 className="fg-strong">{name}</h3>
				<aside>
					<span className="fg-default/50 font-light text-sm">{date}</span>
				</aside>
			</header>
			<main className="flex items-baseline gap-1">
				<span className="text-base fg-strong">{value}</span>{' '}
				<span className="text-sm font-light">{metric}</span>
			</main>
		</article>
	);
}

const RECORDS: BestRecordItemType[] = [
	{
		id: 1,
		name: 'Longest Streak',
		metric: 'Days',
		value: '36',
		date: '5 Aug 2024',
	},
	{
		id: 2,
		name: 'Most Sessions in a Day',
		metric: 'Sessions',
		value: '8',
		date: '12 Jul 2024',
	},
	{
		id: 3,
		name: 'Best Weight Lifted',
		metric: 'Lbs',
		value: '250',
		date: '20 Jun 2024',
	},
];

export function BestRecords({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Best Records" />
			</header>
			<main className="flex flex-col gap-2">
				{RECORDS.map((record) => (
					<BestRecordItem key={record.id} record={record} />
				))}
			</main>
		</article>
	);
}
