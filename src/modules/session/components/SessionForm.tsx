"use client";

import { ModalForm } from "@/modules/form/components/ModalForm";
import { ModalFormButtons } from "../../form/components/ModalFormButtons";
import { useActionState, useEffect } from "react";
import { createSessionAction } from "../actions/create-session";
import { useToast } from "@/modules/toast/hooks/useToast";
import { Label } from "@/modules/form/components/LabelInput";
import { InputText } from "@/modules/form/components/InputText";
import { TextArea } from "@/modules/form/components/TextArea";
import { MultipleSelectBox } from "@/modules/form/components/MultipleSelectBox";
import { SelectOption } from "@/modules/form/types";

export function SessionForm({
	title,
	exercises,
}: {
	title: string;
	exercises: SelectOption[];
}) {
	const [state, action, isPending] = useActionState(createSessionAction, null);
	const { addToast } = useToast();

	useEffect(() => {
		if (!state) return;
		if (state.success)
			addToast("Session created successfully", { type: "success" });
		else addToast(state.message, { type: "error" });
	}, [state, addToast]);

	return (
		<ModalForm title={title} action={action}>
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
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons />
			</footer>
		</ModalForm>
	);
}
