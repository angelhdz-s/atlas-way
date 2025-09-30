import { InputNumber } from "@/modules/form/components/InputNumber";
import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { MultipleSelectBox } from "@/modules/form/components/MultipleSelectBox";
import { TextArea } from "@/modules/form/components/TextArea";
import { SelectOption } from "@/modules/form/types";

export function ExerciseFormFields({ muscles }: { muscles: SelectOption[] }) {
	return (
		<>
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
					options={muscles}
				/>
			</section>
		</>
	);
}
