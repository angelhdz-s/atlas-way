"use client";

import { useContext } from "react";
import { Calendar } from "@/modules/calendar/components/Calendar";
import { CalendarProvider } from "@/modules/calendar/components/CalendarProvider";
import { MonthDateSelector } from "@/modules/calendar/components/MonthDateSelector";
import { YearDateSelector } from "@/modules/calendar/components/YearDateSelector";
import { CalendarContext } from "@/modules/calendar/contexts/calendar-context";
import { CardTitle } from "@/modules/dashboard/card/components/CardTitle";
import { CalendarClock } from "@/modules/globals/components/Icons";
import { SubtleCard } from "@/modules/globals/components/SubtleCard";
import { getSessionFromDate } from "@/modules/globals/lib/dates";
import { LastSessions } from "@/modules/session/components/LastSessions";
import {
	SessionDetails,
	SessionDetailsType,
} from "@/modules/session/components/SessionDetails";

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
} as SessionDetailsType;

export function SessionsHistory({ className }: { className?: string }) {
	const { selectedDate } = useContext(CalendarContext);
	const currentSession = getSessionFromDate(selectedDate); // Here will be a function to get session from date
	return (
		<CalendarProvider>
			<article
				className={`flex flex-col gap-4 dashboard-card-default ${className}`}
			>
				<header>
					<CardTitle title="Session History" />
				</header>
				<main className="grid grid-cols-[auto_1fr_auto] gap-4">
					<section className="flex flex-col justify-between h-61.5">
						<Calendar />
					</section>
					<section className="flex flex-col gap-4">
						<header className="flex items-center gap-2">
							<CalendarClock className="text-subtle" strokeWidth="1.5" />
							<MonthDateSelector />
							<YearDateSelector />
						</header>
						<SubtleCard className="border-1 border-subtle/10 rounded-lg">
							<SessionDetails session={session} />
						</SubtleCard>
					</section>
					<LastSessions />
				</main>
			</article>
		</CalendarProvider>
	);
}
