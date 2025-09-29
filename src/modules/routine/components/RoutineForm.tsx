"use client";

import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { TextArea } from "@/modules/form/components/TextArea";
import { Select } from "@/modules/form/components/Select";
import { CirclePlus } from "@/modules/globals/components/Icons";
import { InputNumber } from "@/modules/form/components/InputNumber";
import Link from "next/link";
import { Box } from "@/modules/form/components/Box";

export function RoutineForm({ title }: { title: string }) {
	const sessions: string[] = [];
	const daysOptions = [
		{ label: "Normal Week", value: "normal" },
		{ label: "Custom", value: "custom" },
	];
	return (
		<>
			<header className="ld-main-fg">{title}</header>
			<main>
				<form className="flex flex-col gap-4">
					<Label title="Routine Name">
						<InputText name="routineName" placeholder="Push, pull, legs" />
					</Label>
					<Label title="Description">
						<TextArea
							name="description"
							placeholder="Six days a week, three sessions twice a week"
							rows={3}
						></TextArea>
					</Label>
					<section className="flex items-center gap-2">
						<Label className="w-full" title="Days Plan">
							<Select name="days" options={daysOptions} multiple={false} />
						</Label>
						<Label className="w-fit" title="Days Range">
							<InputNumber
								name="daysRange"
								min={2}
								max={50}
								className="w-full px-3 py-2 border rounded"
								placeholder="7"
							/>
						</Label>
					</section>
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
					<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
						<ModalFormButtons />
					</footer>
				</form>
			</main>
		</>
	);
}
