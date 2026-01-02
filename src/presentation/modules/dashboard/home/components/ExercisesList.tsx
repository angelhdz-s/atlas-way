import { EXERCISES } from '@/presentation/globals/constants/db';
import { CardTitle } from '../../card/components/CardTitle';
import { SimpleTable } from './SimpleTable';

export function ExercisesList({ className = '' }: { className?: string }) {
	const exerciseKeys = Object.keys(EXERCISES)
		.slice(0, 5)
		.map((key, index) => ({
			key: index,
			name: EXERCISES[key].name,
		}));

	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<CardTitle title="Exercises" />
			<main>
				<SimpleTable header={{ key: '#', name: 'Exercise' }} values={exerciseKeys} />
			</main>
		</article>
	);
}
