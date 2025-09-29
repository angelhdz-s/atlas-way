"use client";

import { useActionState, useEffect } from "react";
import { createExerciseAction } from "@/modules/exercise/actions/create-muscle";
import { InputNumber } from "@/modules/form/components/InputNumber";
import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { TextArea } from "@/modules/form/components/TextArea";
import { SelectOption } from "@/modules/form/types";
import { MuscleIdName } from "@/modules/muscle/types";
import { useToast } from "@/modules/toast/hooks/useToast";
import { MultipleSelectBox } from "@/modules/form/components/MultipleSelectBox";

export function ExerciseForm({
	title,
	muscles,
}: {
	title: string;
	muscles: MuscleIdName[];
}) {
	const { addToast } = useToast();
	const [state, action, isPending] = useActionState(createExerciseAction, null);

	const muscleOptions: SelectOption[] = muscles.map((muscle) => ({
		value: muscle.id.toString(),
		label: muscle.name,
	}));

	useEffect(() => {
		if (!state) return;
		if (!state.success) {
			addToast(state.message, { type: "error" });
		} else if (state.success) {
			addToast("Data sended correctly", { type: "success" });
		}
	}, [state, addToast]);

	return (
		<div className="w-96">
			<header className="text-2xl mb-4 font-funnel-display ld-main-fg">
				{title}
			</header>
			<main className="font-light">
				<form action={action} className="flex flex-col gap-2">
					<Label title="Name">
						<InputText name="name" placeholder="Bench Press" />
					</Label>
					<Label title="Description">
						<TextArea
							name="description"
							placeholder="A compound exercise that targets the chest, shoulders, and triceps."
						/>
					</Label>
					<section className="flex items-center gap-2">
						<Label title="Sets">
							<InputNumber name="sets" />
						</Label>
						<Label title="Reps">
							<InputNumber name="reps" />
						</Label>
						<Label title="Weight (lbs)">
							<InputNumber name="weight" />
						</Label>
					</section>
					<section>
						<MultipleSelectBox
							label="Muscles"
							name="muscles"
							selectingTitle="Select muscles"
							options={muscleOptions}
						/>
					</section>
					<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
						<ModalFormButtons isPending={isPending} />
					</footer>
				</form>
			</main>
		</div>
	);
}
