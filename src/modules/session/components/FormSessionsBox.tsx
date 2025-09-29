import { Box } from "@/modules/form/components/Box";
import { useState } from "react";
import { SessionsFormDataWithExercises } from "../types";
import Link from "next/link";
import { CirclePlus } from "@/modules/globals/components/Icons";

export function FormSessionsBox() {
	const [sessions, setSessions] = useState<SessionsFormDataWithExercises[]>([]);
	return (
		<Box className="grid grid-cols-[1fr_auto] min-h-24">
			<main>
				{sessions.length > 0 ? (
					sessions.map((session, index) => <p key={index}>{session.name}</p>)
				) : (
					<p className="font-light text-base text-foreground/50">
						No sessions added
					</p>
				)}
			</main>
			<aside>
				<Link
					href="/dashboard/routines/create/sessions"
					className="block aspect-square p-1 bg-zinc-900 border border-subtle/20 rounded text-main-foreground hover:bg-zinc-800/80 cursor-pointer transition-colors"
				>
					<CirclePlus strokeWidth="1" />
				</Link>
			</aside>
		</Box>
	);
}
