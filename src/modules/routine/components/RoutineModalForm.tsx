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
import { createRoutine } from "../actions/create-routine";
import { RoutineForm, routineFormSchema } from "../config/routine-schema";
import { useToast } from "@/modules/toast/hooks/useToast";
import { inputNumberConfig } from "@/modules/form/config/input-config";

export function RoutineModalForm({ title }: { title: string }) {
	const toast = useToast();
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

	const onSubmit = async (data: RoutineForm) => {
		const { success, message } = await createRoutine(data);
		const toastType = success ? "success" : "error";
		toast.addToast(message, { type: toastType });
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
								error={errors.name?.message}
							/>
						</Label>
						<Label title="Description name">
							<TextArea
								{...register("description")}
								error={errors.description?.message}
								placeholder="A workout routine for the whole body"
							/>
						</Label>
						<div className="grid grid-cols-2 gap-2">
							<Label title="Cycle" className="flex-1">
								<Select
									{...register("cycle")}
									options={daysOptions}
									multiple={false}
									onChange={handleOnChange}
									error={errors.cycle?.message}
								/>
							</Label>
							<Label title="Days" className="w-fit">
								<InputNumber
									{...register("days", inputNumberConfig)}
									value={"7"}
									placeholder="7"
									disabled={!daysEnabled}
									error={errors.days?.message}
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
