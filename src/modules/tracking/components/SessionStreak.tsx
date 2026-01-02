import { SESSIONS_COUNTERS } from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import { Counter, CounterIcon } from './Counter';
import { Flame } from '@/presentation/globals/components/Icons';

export function SessionStreak({ className = '' }: { className?: string }) {
	const { sessionStreak } = SESSIONS_COUNTERS;

	return (
		<article className={`flex flex-col gap-1 dashboard-card-default ${className}`}>
			<CardTitle title="Session Streak" className="text-left" />
			<main className="flex-1 flex items-center gap-1">
				<CounterIcon icon={Flame} />
				<Counter number={sessionStreak} />
			</main>
		</article>
	);
}
