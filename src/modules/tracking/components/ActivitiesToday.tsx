import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';
import { CirclePlus } from '@/presentation/globals/components/Icons';
import {
	SessionDetails,
	SessionDetailsType,
} from '../../session/presentation/ui/components/SessionDetails';
import { SubtleCard } from '@/presentation/globals/components/SubtleCard';

const session = {
	id: 1,
	name: 'Push Day',
	description: 'Take it easy today!',
	exercises: [
		{
			id: 1,
			name: 'Push Ups',
			sets: 3,
			reps: 10,
			weight: 0,
			status: 'next',
		},
		{
			id: 2,
			name: 'Shoulder Press',
			sets: 3,
			reps: 12,
			weight: 20,
			status: 'next',
		},
		{
			id: 3,
			name: 'Tricep Dips',
			sets: 3,
			reps: 10,
			weight: 10,
			status: 'next',
		},
		{
			id: 4,
			name: 'Lateral Raises',
			sets: 3,
			reps: 15,
			weight: 5,
			status: 'next',
		},
	],
	status: 'next',
} as SessionDetailsType;

export function ActivitiesToday({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Today's Challenge" />
			</header>
			<main className="flex flex-col gap-1">
				<SubtleCard>
					<SessionDetails withStatus={true} session={session} />
				</SubtleCard>
			</main>
			<footer>
				<button className="flex items-center gap-1 cursor-pointer p-2 py-1.5 rounded text-base btn-primary">
					<CirclePlus className="size-5" />
					<span>Register</span>
				</button>
			</footer>
		</article>
	);
}
