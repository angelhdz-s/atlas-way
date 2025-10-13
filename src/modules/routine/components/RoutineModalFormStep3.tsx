"use client";

import { Box } from "@/modules/form/components/Box";
import { Label } from "@/modules/form/components/LabelInput";
import { CirclePlus } from "@/modules/globals/components/Icons";
import Link from "next/link";

export function RoutineModalFormStep3({
	title,
	sessions,
}: {
	title: string;
	sessions: string[];
}) {
	return (
		<section>
			<header className="ld-main-fg">{title}</header>
			<main>
				<Label title="Sessions">
					<Box className="grid grid-cols-[1fr_auto] p-2 w-full bg-background/50 rounded-lg border border-subtle/20 min-h-24">
						<main>
							{sessions.length > 0 ? (
								sessions.map((session, index) => <p key={index}>{session}</p>)
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
				</Label>
			</main>
		</section>
	);
}
