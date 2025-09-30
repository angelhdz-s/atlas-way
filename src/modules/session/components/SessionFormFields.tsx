import { InputText } from "@/modules/form/components/InputText";
import { Label } from "@/modules/form/components/LabelInput";
import { MultipleSelectBox } from "@/modules/form/components/MultipleSelectBox";
import { TextArea } from "@/modules/form/components/TextArea";
import { SelectOption } from "@/modules/form/types";

export function SessionFormFields({
	exercises,
}: {
	exercises: SelectOption[];
}) {
	return (
		<>
			<Label title="Name">
				<InputText name="name" placeholder="Enter Session name" />
			</Label>
			<Label title="Description">
				<TextArea
					name="description"
					placeholder="Day focused on arms training"
				/>
			</Label>
			<MultipleSelectBox
				selectingTitle="Select exercises"
				label="Exercises"
				name="exercises"
				options={exercises}
			/>
		</>
	);
}
