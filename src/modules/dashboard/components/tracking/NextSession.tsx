import { CardTitle } from "../home/card/CardTitle";
import { SessionDetails, SessionDetailsType } from "../sessions/SessionDetails";

const session = {
	id: 1,
	name: "Push Day",
	description: "Take it easy today!",
	exercises: [
		{
			id: 1,
			name: "Push Ups",
			sets: 3,
			reps: 10,
			weight: 0,
			status: "next",
		},
		{
			id: 2,
			name: "Shoulder Press",
			sets: 3,
			reps: 12,
			weight: 20,
			status: "next",
		},
		{
			id: 3,
			name: "Tricep Dips",
			sets: 3,
			reps: 10,
			weight: 10,
			status: "next",
		},
		{
			id: 4,
			name: "Lateral Raises",
			sets: 3,
			reps: 15,
			weight: 5,
			status: "next",
		},
	],
	status: "next",
	date: "Aug 10, 2024",
} as SessionDetailsType;
export function NextSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<header>
				<CardTitle title="Next Session" />
			</header>
			<main className="flex flex-col gap-1">
				<SessionDetails withStatus={false} session={session} />
			</main>
		</article>
	);
}
