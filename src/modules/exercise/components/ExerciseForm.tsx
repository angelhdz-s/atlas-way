"use client";

import { useExerciseForm } from "@/modules/exercise/hooks/useExerciseForm";
import { InputNumber } from "@/modules/form/components/InputNumber";
import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { MultipleSelectBox } from "@/modules/form/components/MultipleSelectBox";
import { TextArea } from "@/modules/form/components/TextArea";
import { MuscleIdName } from "@/modules/muscle/types";

export function ExerciseForm({
	title,
	muscles,
}: {
	title: string;
	muscles: MuscleIdName[];
}) {
	const { action, isPending, muscleOptions } = useExerciseForm({ muscles });

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
