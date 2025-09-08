"use client";

import { SubtleCard } from "@/modules/globals/components/SubtleCard";
import { CardTitle } from "../home/card/CardTitle";
import { LastSessions } from "../sessions/LastSessions";
import {
	SessionDetails,
	SessionDetailsProps,
} from "../sessions/SessionDetails";
import { Calendar } from "./calendar/Calendar";
import { CalendarProvider } from "./calendar/CalendarProvider";

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
} as SessionDetailsProps["session"];

export function SessionsHistory({ className }: { className?: string }) {
	return (
		<CalendarProvider>
			<article
				className={`flex flex-col gap-4 dashboard-card-default ${className}`}
			>
				<header>
					<CardTitle title="Session History" />
				</header>
				<main className="grid grid-cols-[auto_1fr_auto] gap-4">
					<Calendar />
					<section className="flex flex-col gap-1 justify-between">
						<header>
							<CardTitle title="Details" />
						</header>
						<SubtleCard>
							<SessionDetails session={session} />
						</SubtleCard>
					</section>
					<LastSessions />
				</main>
			</article>
		</CalendarProvider>
	);
}
