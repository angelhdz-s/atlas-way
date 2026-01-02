import { SESSIONS_COUNTERS } from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import { Counter, CounterIcon } from './Counter';
import { Trophy } from '@/presentation/globals/components/Icons';

export function AllSessionsDoneCounter({ className }: { className?: string }) {
	const { totalSessions } = SESSIONS_COUNTERS;
	return (
		<article className={`flex flex-col gap-1 dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Total Sessions" />
			</header>
			<main className="flex-1 flex items-center gap-1">
				<CounterIcon icon={Trophy} />
				<Counter number={totalSessions} />
			</main>
		</article>
	);
}
