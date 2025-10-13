"use client";

import { InputNumber } from "@/modules/form/components/InputNumber";
import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { Select } from "@/modules/form/components/Select";
import { TextArea } from "@/modules/form/components/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const routineFormSchema = z.object({
	name: z
		.string({ error: "Name must be a string" })
		.min(3, { error: "Name must be at least 3 characters long" })
		.max(50, { error: "Name must be at most 50 characters long" }),
	description: z
		.string({ error: "Description must be a string" })
		.max(255, { error: "Description must be at most 255 characters long" })
		.optional(),
	cycle: z.enum(["normal", "custom"]),
	days: z.number().min(1).max(30).optional(),
});

export type RoutineForm = z.infer<typeof routineFormSchema>;

export function RoutineModalForm({ title }: { title: string }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RoutineForm>({
		resolver: zodResolver(routineFormSchema),
	});
	const [daysEnabled, setDaysEnabled] = useState(false);

	const daysOptions = [
		{ label: "Normal Week", value: "normal" },
		{ label: "Custom", value: "custom" },
	];

	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setDaysEnabled(value === "custom");
	};

	const onSubmit = (data: RoutineForm) => {
		console.log(data);
	};

	return (
		<>
			<header className="ld-main-fg">{title}</header>
			<main>
				<form
					className="flex flex-col gap-4 w-92"
					onSubmit={handleSubmit(onSubmit)}
				>
					<section className="flex flex-col gap-2">
						<Label title="Routine name">
							<InputText
								{...register("name")}
								placeholder="Full Body Workout"
							/>
							{errors.name && (
								<p className="text-red-500">{errors.name.message}</p>
							)}
						</Label>
						<Label title="Description name">
							<TextArea
								{...register("description")}
								placeholder="A workout routine for the whole body"
							/>
							{errors.description && (
								<p className="text-red-500">{errors.description.message}</p>
							)}
						</Label>
						<div className="flex items-center gap-2">
							<Label title="Cycle" className="flex-1">
								<Select
									name="cycle"
									options={daysOptions}
									multiple={false}
									onChange={handleOnChange}
								/>
							</Label>
							<Label title="Days" className="w-fit">
								<InputNumber
									name="days"
									placeholder="7"
									disabled={!daysEnabled}
								/>
							</Label>
						</div>
					</section>
					<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
						<ModalFormButtons />
					</footer>
				</form>
			</main>
		</>
	);
}
