import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import styles from './CurrentGoals.module.css';

function PercentageBar({ value, target }: { value: number; target: number }) {
	const percentage = Math.min((value / target) * 100, 100);
	return (
		<div className="w-full bg-subtle/20 rounded-full h-1 overflow-hidden">
			<div
				className={`bg-complete h-1 rounded-full transition-all duration-500 ${styles['animate-scale-x-right']}`}
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	);
}

type GoalItemType = {
	id: number;
	name: string;
	value: number;
	target: number;
};

function GoalItem({ className = '', goal }: { className?: string; goal: GoalItemType }) {
	const { name, value, target } = goal;

	const completedClass = value >= target ? 'fg-complete' : '';

	return (
		<article
			className={`flex flex-col gap-1 bg-subtle/5 rounded-lg px-4 py-2 fg-strong ${completedClass} ${className}`}
		>
			<header className="flex items-center justify-between gap-2">
				<h3 className="text-base">{name}</h3>
				<aside>
					<span
						className={`font-light ${completedClass || 'text-default/50'}`}
					>{`${value} / ${target}`}</span>
				</aside>
			</header>
			<footer>
				<PercentageBar value={value} target={target} />
			</footer>
		</article>
	);
}

const GOALS: GoalItemType[] = [
	{
		id: 1,
		name: 'Reach 8 Sessions in July',
		value: 4,
		target: 8,
	},
	{
		id: 2,
		name: 'Monthly Articles',
		value: 7,
		target: 10,
	},
	{
		id: 3,
		name: 'Daily Steps',
		value: 8000,
		target: 10000,
	},
	{
		id: 4,
		name: 'Do 3 Exercises Today',
		value: 3,
		target: 3,
	},
];

export function CurrentGoals({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Goals" />
			</header>
			<main className="flex flex-col gap-2">
				{GOALS.map((goal) => (
					<GoalItem key={goal.id} goal={goal} />
				))}
			</main>
		</article>
	);
}
